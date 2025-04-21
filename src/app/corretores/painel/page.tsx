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
import { LoadingSpinner } from '@/components/Dashboard/LoadingSpinner';
import { SummaryCard } from '@/components/Painel/SummaryCard';
import { NotificationsHeader } from '@/components/Painel/NotificationsHeader';
import { NotificationList } from '@/components/Painel/NotificationList';
import { EmptyNotifications } from '@/components/Painel/EmptyNotifications';

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
    return <LoadingSpinner />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#084040] to-[#0D0D0D] p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <CorretorHeader 
            nome={corretorNome}
            mostrarBotaoDashboard={true}
            dashboardPath="painel/dashboard"
          />
        </div>
        
        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard
            title="Leads Hoje"
            value={summaryData.today || 0}
            icon={<FiUser size={20} />}
            progressValue={Math.min((summaryData.today || 0) * 10, 100)}
            progressColor="bg-green-400"
          />
          
          <SummaryCard
            title="Leads Ontem"
            value={summaryData.yesterday || 0}
            icon={<FiClock size={20} />}
            progressValue={Math.min((summaryData.yesterday || 0) * 10, 100)}
            progressColor="bg-yellow-400"
          />
          
          <SummaryCard
            title="Lembretes Urgentes"
            value={summaryData.urgent || 0}
            icon={<FiAlertTriangle size={20} className="text-yellow-400" />}
            color="text-yellow-400"
            progressValue={Math.min((summaryData.urgent || 0) * 20, 100)}
            progressColor="bg-red-400"
          />
        </div>
  
        {/* Notificações */}
        <div className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden mb-8">
          <NotificationsHeader count={notifications.length} />
          
          {notifications.length > 0 ? (
            <NotificationList notifications={notifications} />
          ) : (
            <EmptyNotifications />
          )}
        </div>
  
        {/* Lembretes e Email */}
        <Reminder />
  
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}