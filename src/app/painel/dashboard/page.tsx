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

  useEffect(() => {
    const fetchLeads = async () => {
      const corretorId = localStorage.getItem('corretorId');

      if (!corretorId) {
        router.push('/login');
        return;
      }

      try {
        const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('corretor_id', corretorId);
      
      console.log('Data:', data);
      console.log('Error:', error);


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

    fetchLeads();
  }, [router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold">Leads Atribuídos</h1>
      <div className="mt-6">
        {leads.length === 0 ? (
          <p className="text-gray-500">Não há leads atribuídos no momento.</p>
        ) : (
          <ul className="space-y-4">
            {leads.map((lead: any) => (
              <li key={lead.id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold">{lead.nome}</h2>
                <p className="text-gray-600">Email: {lead.email}</p>
                <p className="text-gray-600">Telefone: {lead.telefone}</p>
                <p className="text-gray-600">Idade: {lead.idade}</p>
                <p className="text-gray-600">Preferência de Contato: {lead.preferencia_contato ? 'Sim' : 'Não'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
