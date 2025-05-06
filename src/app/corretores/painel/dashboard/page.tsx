/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import CorretorHeader from '@/components/corretores/CorretorHeader';
import CorretorStats from '@/components/corretores/CorretorStats';
import Tabs from '@/components/corretores/Tabs';
import LeadTable from '@/components/corretores/LeadTable';
import Pagination from '@/components/corretores/Pagination';
import { LoadingSpinner } from '@/components/Dashboard/LoadingSpinner';
import { ErrorState } from '@/components/Dashboard/ErrorState';
import { SearchBar } from '@/components/Dashboard/SearchBar';
import { EmptyState } from '@/components/Dashboard/EmptyState';
import { Footer } from '@/components/Dashboard/Footer';

export default function Dashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [corretorNome, setCorretorNome] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'contatados' | 'pendentes'>('todos');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionCheck = await fetch('/api/auth/session');
        const { corretor } = await sessionCheck.json();

        if (!sessionCheck.ok || !corretor?.id) {
          router.push('/login');
          return;
        }

        const { data: corretorData, error: corretorError } = await supabase
          .from('corretores')
          .select('nome')
          .eq('id', corretor.id)
          .single();

        if (corretorError) {
          console.error('Erro ao buscar corretor:', corretorError);
          setError('Erro ao carregar dados do corretor');
          return;
        }

        setCorretorNome(corretorData.nome);

        const { data: leadsData, error: leadsError } = await supabase
          .from('lead_duplicate')
          .select('*')
          .eq('corretor_id', corretor.id)
          .order('created_at', { ascending: false });

        if (leadsError) {
          setError(leadsError.message);
        } else {
          setLeads(leadsData || []);
        }
      } catch (error) {
        setError('Erro ao buscar os dados');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const filteredLeads = leads.filter(lead => {
    let tabFilter = true;
    switch (activeTab) {
      case 'contatados':
        tabFilter = lead.contatado === true;
        break;
      case 'pendentes':
        tabFilter = lead.contatado === false;
        break;
      case 'todos':
      default:
        tabFilter = lead.contatado === false;
    }

    const searchFilter = searchTerm === '' || 
      lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.telefone.includes(searchTerm);

    return tabFilter && searchFilter;
  });

  const stats = {
    total: leads.filter(lead => !lead.contatado).length,
    contatados: leads.filter(lead => lead.contatado).length,
    pendentes: leads.filter(lead => !lead.contatado).length
  };

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleMarkContacted = async (leadId: string) => {
    try {
      await supabase
        .from('lead_duplicate')
        .update({ contatado: true })
        .eq('id', leadId);
      
      setLeads(prev => prev.map(lead => 
        lead.id === leadId ? { ...lead, contatado: true } : lead
      ));
    } catch (error) {
      console.error('Erro ao atualizar lead:', error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="min-h-screen bg-[#D9D9D9] p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="mb-4 sm:mb-6">
        <CorretorHeader nome={corretorNome} />
      </div>
      
      <div className="mb-4 sm:mb-6">
        <CorretorStats 
          total={stats.total} 
          contatados={stats.contatados} 
          pendentes={stats.pendentes} 
        />
      </div>

      <main className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border-b border-[#A1A6A2]/20">
          <Tabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            setCurrentPage={setCurrentPage} 
          />
          
          <div className="w-full sm:w-auto">
            <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <LeadTable 
            leads={paginatedLeads} 
            handleMarkContacted={handleMarkContacted} 
          />
        </div>

        {filteredLeads.length > 0 ? (
          <div className="p-3 sm:p-4">
            <Pagination
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        ) : (
          <EmptyState 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </main>

      <div className="mt-4 sm:mt-6">
        <Footer />
      </div>
    </div>
  );
}