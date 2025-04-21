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
import { FiSearch } from 'react-icons/fi';

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
        // Verifica a sessão através de uma chamada API
        const sessionCheck = await fetch('/api/auth/session');
        const { corretor } = await sessionCheck.json();

        if (!sessionCheck.ok || !corretor?.id) {
          router.push('/login');
          return;
        }

        // Busca dados do corretor
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

        // Busca leads
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

  // Filtro combinado (tab + busca)
  const filteredLeads = leads.filter(lead => {
    // Filtro por aba
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

    // Filtro por busca
    const searchFilter = searchTerm === '' || 
      lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.telefone.includes(searchTerm);

    return tabFilter && searchFilter;
  });

  // Estatísticas atualizadas
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
    return (
      <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#084040]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="text-red-500 mb-4">Erro: {error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#084040] text-white px-4 py-2 rounded hover:bg-[#0D0D0D] transition"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#D9D9D9] p-4 md:p-8">
      <CorretorHeader nome={corretorNome} />
      
      <div className="text-white rounded-xl mb-6">
        <CorretorStats 
          total={stats.total} 
          contatados={stats.contatados} 
          pendentes={stats.pendentes} 
        />
      </div>

      <main className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-[#A1A6A2]/20">
          <Tabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            setCurrentPage={setCurrentPage} 
          />
          
          {/* Barra de Pesquisa */}
          <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-[#3A403F]" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome, email ou telefone..."
              className="pl-10 pr-20 py-2 border border-[#A1A6A2] rounded-lg focus:ring-2 focus:ring-[#084040] focus:border-[#084040] outline-none transition w-full"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Resetar para a primeira página ao buscar
              }}
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
          <Pagination
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        ) : (
          <div className="p-8 text-center text-[#3A403F]">
            <p className="text-lg">Nenhum lead encontrado</p>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-2 text-[#084040] hover:underline"
              >
                Limpar busca
              </button>
            )}
          </div>
        )}
      </main>

      <footer className="mt-6 text-center text-sm text-[#3A403F]">
        <p>© {new Date().getFullYear()} N&H Associados - Painel do Corretor</p>
        <p className="text-xs text-[#A1A6A2] mt-1">Versão 1.0.2</p>
      </footer>
    </div>
  );
}