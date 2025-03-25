/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FiUser, FiMail, FiPhone, FiCheck, FiX, FiEdit, FiPhoneCall, FiCalendar } from 'react-icons/fi';

export default function Dashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [corretorNome, setCorretorNome] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'contatados' | 'pendentes'>('todos');

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

  const filteredLeads = leads.filter(lead => {
    if (activeTab === 'contatados') return lead.contatado;
    if (activeTab === 'pendentes') return !lead.contatado;
    return true;
  });

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
      {/* Header */}
      <header className="bg-[#084040] text-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Painel do Corretor</h1>
            {corretorNome && (
              <p className="text-[#A1A6A2] mt-1">
                Bem-vindo, <span className="text-white font-medium">{corretorNome}</span>
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#0D0D0D] px-4 py-2 rounded-lg">
              <p className="text-[#A1A6A2] text-sm">Total de Leads</p>
              <p className="text-white text-xl font-bold">{leads.length}</p>
            </div>
            
            <div className="bg-[#0D0D0D] px-4 py-2 rounded-lg">
              <p className="text-[#A1A6A2] text-sm">Contatados</p>
              <p className="text-green-400 text-xl font-bold">
                {leads.filter(l => l.contatado).length}
              </p>
            </div>
            
            <div className="bg-[#0D0D0D] px-4 py-2 rounded-lg">
              <p className="text-[#A1A6A2] text-sm">Pendentes</p>
              <p className="text-yellow-400 text-xl font-bold">
                {leads.filter(l => !l.contatado).length}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-[#A1A6A2]">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'todos' ? 'text-[#084040] border-b-2 border-[#084040]' : 'text-[#3A403F]'}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'contatados' ? 'text-[#084040] border-b-2 border-[#084040]' : 'text-[#3A403F]'}`}
            onClick={() => setActiveTab('contatados')}
          >
            Contatados
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'pendentes' ? 'text-[#084040] border-b-2 border-[#084040]' : 'text-[#3A403F]'}`}
            onClick={() => setActiveTab('pendentes')}
          >
            Pendentes
          </button>
        </div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          {filteredLeads.length === 0 ? (
            <div className="p-8 text-center text-[#3A403F]">
              <p className="text-lg">Nenhum lead encontrado</p>
              <p className="text-sm text-[#A1A6A2]">Quando novos leads forem atribuídos, eles aparecerão aqui</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-[#F5F5F5]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Lead</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Contato</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Informações</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A1A6A2]/20">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#F9F9F9]">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#084040] rounded-full flex items-center justify-center text-white">
                          <FiUser size={18} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#0D0D0D]">{lead.nome}</div>
                          <div className="text-sm text-[#3A403F]">{lead.idade} anos</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-[#0D0D0D] flex items-center gap-2">
                        <FiMail className="text-[#084040]" /> {lead.email}
                      </div>
                      <div className="text-sm text-[#0D0D0D] mt-2 flex items-center gap-2">
                        <FiPhone className="text-[#084040]" /> {lead.telefone}
                      </div>
                      <div className="text-xs text-[#3A403F] mt-1">
                        Prefere contato por: {lead.preferencia_contato}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${lead.cnpj ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          CNPJ: {lead.cnpj ? 'Sim' : 'Não'}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${lead.plano_saude ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                          Plano de Saúde: {lead.plano_saude ? 'Sim' : 'Não'}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${lead.formacao_academica ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                          Formação: {lead.formacao_academica ? 'Sim' : 'Não'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${lead.contatado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {lead.contatado ? 'Contatado' : 'Pendente'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleMarkContacted(lead.id)}
                          disabled={lead.contatado}
                          className={`flex items-center gap-1 px-3 py-1 rounded ${lead.contatado ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#084040] text-white hover:bg-[#0D0D0D]'}`}
                        >
                          {lead.contatado ? (
                            <>
                              <FiCheck /> Contatado
                            </>
                          ) : (
                            <>
                              <FiPhoneCall /> Contatar
                            </>
                          )}
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 rounded border border-[#084040] text-[#084040] hover:bg-[#084040]/10">
                          <FiEdit /> Editar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-6 text-center text-sm text-[#3A403F]">
        <p>© {new Date().getFullYear()} N&H Associados - Painel do Corretor</p>
        <p className="text-xs text-[#A1A6A2] mt-1">Versão 1.0.0</p>
      </footer>
    </div>
  );
}