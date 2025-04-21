/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/painel/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import CorretorHeader from '@/components/corretores/CorretorHeader';
import { FiUser, FiBell, FiArrowRight, FiClock, FiMail, FiAlertTriangle } from 'react-icons/fi';
import Image from 'next/image';
import Footer from '@/components/Painel/Footer';
import Reminder from '@/components/Painel/Reminder';

export default function PainelPage() {
  const router = useRouter();
  const [corretorNome, setCorretorNome] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastLogin, setLastLogin] = useState<string | null>(null);
  const [summaryData, setSummaryData] = useState<any>({});

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

        // Busca dados do corretor usando o ID da sessão
        const { data: corretorData } = await supabase
          .from('corretores')
          .select('nome, last_login, email')
          .eq('id', corretor.id)
          .single();

        if (corretorData) {
          setCorretorNome(corretorData.nome);
          setLastLogin(corretorData.last_login);
          
          // Atualiza último login
          await supabase
            .from('corretores')
            .update({ last_login: new Date().toISOString() })
            .eq('id', corretor.id);

          // Envia e-mail de resumo (apenas uma vez por dia)
          await sendDailySummary(corretorData.email);
        }

        // Busca leads não contatados dos últimos 5 dias
        const fiveDaysAgo = new Date();
        fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

        const { data: leadsData } = await supabase
        .from('lead_duplicate')
        .select('*')
        .eq('corretor_id', corretor.id)
        .eq('contatado', false)
        .gte('created_at', fiveDaysAgo.toISOString())
        .order('created_at', { ascending: false });

      if (leadsData) {
        processNotifications(leadsData, corretorData?.last_login);
        prepareSummaryData(leadsData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [router]);

  const processNotifications = (leads: any[], lastLoginDate?: string) => {
    const now = new Date();
    const warningThreshold = new Date();
    warningThreshold.setDate(warningThreshold.getDate() - 3); // 3 dias = alerta amarelo

    const newNotifications = leads.map(lead => {
      const leadDate = new Date(lead.created_at);
      const daysOld = Math.floor((now.getTime() - leadDate.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        id: lead.id,
        nome: lead.nome,
        data: leadDate.toLocaleDateString('pt-BR'),
        hora: leadDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isNew: !lastLoginDate || leadDate > new Date(lastLoginDate),
        isUrgent: daysOld >= 3,
        daysOld
      };
    });

    setNotifications(newNotifications);
  };

  const prepareSummaryData = (leads: any[]) => {
    const now = new Date();
    const today = new Date(now.toDateString());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const summary = {
      today: leads.filter(lead => new Date(lead.created_at) >= today).length,
      yesterday: leads.filter(lead => {
        const leadDate = new Date(lead.created_at);
        return leadDate >= yesterday && leadDate < today;
      }).length,
      urgent: leads.filter(lead => {
        const leadDate = new Date(lead.created_at);
        return (now.getTime() - leadDate.getTime()) > (3 * 24 * 60 * 60 * 1000);
      }).length
    };

    setSummaryData(summary);
  };

  const sendDailySummary = async (email: string) => {
    // Verifica se já enviou e-mail hoje
    const lastSent = sessionStorage.getItem('lastEmailSent');
    const today = new Date().toDateString();
    
    if (!lastSent || lastSent !== today) {
      try {
        // Aqui você implementaria o envio real do e-mail
        // Esta é uma simulação:
        console.log(`Enviando resumo diário para ${email}`);
        
        // Marca como enviado hoje
        sessionStorage.setItem('lastEmailSent', today);
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#084040] to-[#0D0D0D]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#084040] to-[#0D0D0D] p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
            <CorretorHeader 
                nome={corretorNome}
                mostrarBotaoDashboard={true}
                dashboardPath="painel/dashboard" // Caminho absoluto (Funcionando não mexer se não for realmente necessario)
            />
          </div>
        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#A1A6A2] text-sm font-medium mb-1">Leads Hoje</h3>
                <p className="text-3xl font-bold">{summaryData.today || 0}</p>
              </div>
              <div className="bg-[#084040] p-3 rounded-lg">
                <FiUser size={20} />
              </div>
            </div>
            <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-400" 
                style={{ width: `${Math.min((summaryData.today || 0) * 10, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#A1A6A2] text-sm font-medium mb-1">Leads Ontem</h3>
                <p className="text-3xl font-bold">{summaryData.yesterday || 0}</p>
              </div>
              <div className="bg-[#084040] p-3 rounded-lg">
                <FiClock size={20} />
              </div>
            </div>
            <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-400" 
                style={{ width: `${Math.min((summaryData.yesterday || 0) * 10, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[#A1A6A2] text-sm font-medium mb-1">Lembretes Urgentes</h3>
                <p className="text-3xl font-bold text-yellow-400">{summaryData.urgent || 0}</p>
              </div>
              <div className="bg-[#084040] p-3 rounded-lg">
                <FiAlertTriangle size={20} className="text-yellow-400" />
              </div>
            </div>
            <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-400" 
                style={{ width: `${Math.min((summaryData.urgent || 0) * 20, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Notificações */}
        <div className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden mb-8">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold flex items-center gap-3">
              <FiBell className="text-[#A1A6A2]" /> 
              <span>Atividades Recentes</span>
              {notifications.length > 0 && (
                <span className="bg-[#084040] text-white text-sm px-2 py-1 rounded-full">
                  {notifications.length}
                </span>
              )}
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Novo</span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
              <span>Urgente</span>
            </div>
          </div>

          {notifications.length > 0 ? (
            <ul className="divide-y divide-white/10">
              {notifications.map(notification => (
                <li 
                  key={notification.id} 
                  className={`p-6 hover:bg-white/10 transition-all ${
                    notification.isUrgent ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 ${
                      notification.isNew ? 'text-green-400' : 'text-[#A1A6A2]'
                    }`}>
                      {notification.isUrgent ? (
                        <FiAlertTriangle size={20} className="text-yellow-400" />
                      ) : (
                        <FiUser size={20} />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">
                          {notification.isNew && (
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          )}
                          {notification.isUrgent && (
                            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                          )}
                          {notification.nome}
                        </h3>
                        <span className="text-sm text-[#A1A6A2]">
                          {notification.data} às {notification.hora}
                        </span>
                      </div>
                      <p className="text-sm text-[#A1A6A2] mt-1">
                        {notification.isUrgent
                          ? `⚠️ Urgente: Lead com ${notification.daysOld} dias sem contato`
                          : 'Aguardando contato'}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-[#A1A6A2]" size={24} />
              </div>
              <p className="text-lg">Nenhuma notificação recente</p>
              <p className="text-sm text-[#A1A6A2] mt-1">Você está em dia com seus leads!</p>
            </div>
          )}
        </div>

        {/* Lembretes e Email */}
          <Reminder />

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}