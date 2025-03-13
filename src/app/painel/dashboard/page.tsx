/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [corretorNome, setCorretorNome] = useState<string | null>(null);

  useEffect(() => {
    const fetchCorretor = async () => {
      const corretorId = localStorage.getItem('corretorId');
      if (!corretorId) {
        router.push('/login');
        return;
      }

      // Buscar dados do corretor logado
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
          .eq('corretor_id', corretorId);

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

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Header com nome do corretor e quantidade de leads */}
      <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold">Painel do Corretor</h1>
        {corretorNome && <span className="text-lg">Bem-vindo, {corretorNome}!</span>}
        <span className="text-lg font-medium">Leads: {leads.length}</span>
      </header>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Leads Atribuídos</h2>

        {leads.length === 0 ? (
          <p className="text-gray-500">Não há leads atribuídos no momento.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Nome</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Telefone</th>
                <th className="border p-2">Contato</th>
                <th className="border p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="text-center border-b">
                  <td className="border p-2">{lead.nome}</td>
                  <td className="border p-2">{lead.email}</td>
                  <td className="border p-2">{lead.telefone}</td>
                  <td className="border p-2">
                    {lead.contatado ? (
                      <span className="text-green-600 font-bold">Sim</span>
                    ) : (
                      <span className="text-red-600 font-bold">Não</span>
                    )}
                  </td>
                  <td className="border p-2">
                    <button
                      className={`px-4 py-1 rounded ${
                        lead.contatado ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                      } text-white`}
                      disabled={lead.contatado}
                      onClick={async () => {
                        await supabase
                          .from('lead_duplicate')
                          .update({ contatado: true })
                          .eq('id', lead.id);
                        setLeads((prev) =>
                          prev.map((l) => (l.id === lead.id ? { ...l, contatado: true } : l))
                        );
                      }}
                    >
                      {lead.contatado ? 'Já Contatado' : 'Marcar como Contatado'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
