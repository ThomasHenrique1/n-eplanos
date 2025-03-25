/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import CorretorHeader from '@/components/corretores/CorretorHeader';
import CorretorStats from '@/components/corretores/CorretorStats';
import Tabs from '@/components/corretores/Tabs';
import LeadTable from '@/components/corretores/LeadTable';
import Pagination from '@/components/corretores/Pagination';

export default function Dashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [corretorNome, setCorretorNome] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'contatados' | 'pendentes'>('todos');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchCorretor = async () => {
      const corretorId = localStorage.getItem('corretorId');
      if (!corretorId) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('corretores')
        .select('nome')
        .eq('id', corretorId)
        .single();

      if (error) {
        console.error('Erro ao buscar corretor:', error);
      } else {
        setCorretorNome(data.nome);
      }
    };

    const fetchLeads = async () => {
      const corretorId = localStorage.getItem('corretorId');
      if (!corretorId) return;

      try {
        const { data, error } = await supabase
          .from('lead_duplicate')
          .select('*')
          .eq('corretor_id', corretorId)
          .order('created_at', { ascending: false });

        if (error) {
          setError(error.message);
        } else {
          setLeads(data || []);
        }
      } catch (error) {
        setError('Erro ao buscar os leads');
      } finally {
        setLoading(false);
      }
    };

    fetchCorretor();
    fetchLeads();
  }, [router]);

  // Filtro corrigido
  const filteredLeads = leads.filter(lead => {
    switch (activeTab) {
      case 'contatados':
        return lead.contatado === true;
      case 'pendentes':
        return lead.contatado === false;
      case 'todos':
      default:
        return lead.contatado === false; // Mostra apenas pendentes na aba "Todos"
    }
  });

  // Estatísticas atualizadas
  const stats = {
    total: leads.filter(lead => !lead.contatado).length, // Total de pendentes
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
        <Tabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setCurrentPage={setCurrentPage} 
        />

        <div className="overflow-x-auto">
          <LeadTable 
            leads={paginatedLeads} 
            handleMarkContacted={handleMarkContacted} 
          />
        </div>

        {filteredLeads.length > 0 && (
          <Pagination
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </main>

      <footer className="mt-6 text-center text-sm text-[#3A403F]">
        <p>© {new Date().getFullYear()} N&H Associados - Painel do Corretor</p>
        <p className="text-xs text-[#A1A6A2] mt-1">Versão 1.0.1</p>
      </footer>
    </div>
  );
}