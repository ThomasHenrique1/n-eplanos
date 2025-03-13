'use client'; 
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from "next/link";
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .storage
          .from('image-logo') // Nome do bucket
          .list('', { limit: 10 }); // Pegando as 10 imagens

        if (error) {
          console.log('Erro ao buscar imagens:', error.message);
        } else {
          // Verifique os dados recebidos
          console.log('Imagens recebidas:', data);

          const urls = data?.map(file => {
            // Construindo a URL manualmente
            const publicUrl = `https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/${file.name}`;
            return publicUrl;
          }) || [];

          // Atualiza o estado com as URLs das imagens
          setImageUrls(urls);

          // Verifique se as URLs estão corretas
          console.log('URLs das imagens:', urls);
        }
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Seção Hero */}
      <section className="w-full bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Seu Plano de Saúde Ideal Está Aqui!</h1>
        <p className="text-lg mt-4">
          Garanta o melhor plano de saúde para você e sua família com preços acessíveis.
        </p>
        <Link
          href="/formulario"
          className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Faça sua Cotação
        </Link>
      </section>

      {/* Seção de Benefícios */}
      <section className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Por que escolher a n&eassociados?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Planos Acessíveis</h3>
            <p className="text-gray-600">Opções que cabem no seu bolso sem perder qualidade.</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Cobertura Nacional</h3>
            <p className="text-gray-600">Atendimento em todo o Brasil com ampla rede credenciada.</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Atendimento 24h</h3>
            <p className="text-gray-600">Suporte especializado sempre que precisar.</p>
          </div>
        </div>
      </section>

      {/* Seção de Logos de Planos de Saúde */}
      <section className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Nossos Planos de Saúde Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {imageUrls.length > 0 ? (
            imageUrls.map((url, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={url}
                  alt={`Logo do plano de saúde ${index + 1}`}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">Carregando imagens...</p>
          )}
        </div>
      </section>

      {/* Seção de Chamada para Ação */}
      <section className="w-full max-w-4xl text-center mt-10 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Pronto para cuidar da sua saúde?</h2>
        <p className="text-lg mt-2">Clique no botão abaixo e faça sua cotação agora mesmo.</p>
        <Link
          href="/formulario"
          className="mt-4 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Cotação Gratuita
        </Link>
      </section>
    </main>
  );
}
