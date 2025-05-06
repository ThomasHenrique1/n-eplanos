/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLock, FiMail, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        // REMOVIDO: localStorage.setItem('corretorId', data.corretorId);
        // O cookie httpOnly já foi setado automaticamente pelo servidor
        router.push("/corretores/painel");
      } else {
        setErro(data.error || 'Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      setErro('Erro de conexão. Por favor, verifique sua internet e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-[#3A403F] flex flex-col md:flex-row">
        {/* Header com Logo - Área de Corretores (Lado Esquerdo) */}
        <div className="w-full md:w-1/2 bg-[#084040] flex flex-col justify-between p-6 md:p-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#D9D9D9] text-center md:text-left">Área Exclusiva para Corretores</h1>
            <div className="flex justify-center mt-4 md:mt-6">
              <Image
                src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//android-chrome-512x512.png"
                alt="Logo da Corretora - Área de Corretores"
                width={100}
                height={100}
                className="object-contain w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <p className="text-[#A1A6A2] mt-3 md:mt-4 text-center text-sm md:text-base">Acesso restrito ao sistema interno</p>
          </div>
          
          {/* Rodapé - Área de Corretores */}
          <div className="text-center mt-4 md:mt-0">
            <p className="text-xs text-[#ffffff]">
              © {new Date().getFullYear()} Área Restrita - N&H Associados. Uso exclusivo para corretores.
            </p>
            <p className="text-xs text-[#A1A6A2] mt-1">
              Versão 1.0.0 | Ambiente Seguro | Termos de Uso
            </p>
          </div>
        </div>

        {/* Formulário (Lado Direito) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <form onSubmit={handleLogin}>
            {erro && (
              <div className="mb-4 md:mb-6 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded text-sm md:text-base">
                <p>{erro}</p>
              </div>
            )}

            <div className="mb-4 md:mb-6">
              <label htmlFor="email" className="block text-[#084040dc] font-medium mb-2 text-sm md:text-base">
                E-mail Profissional
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-[#3A403F] text-sm md:text-base" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 border border-[#A1A6A2] rounded-lg focus:ring-2 focus:ring-[#084040] focus:border-[#084040] outline-none transition text-sm md:text-base"
                  required
                />
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <label htmlFor="senha" className="block text-[#084040dc] font-medium mb-2 text-sm md:text-base">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-[#3A403F] text-sm md:text-base" />
                </div>
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full pl-9 md:pl-10 pr-10 md:pr-12 py-2 md:py-3 border border-[#A1A6A2] rounded-lg focus:ring-2 focus:ring-[#084040] focus:border-[#084040] outline-none transition text-sm md:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#3A403F] hover:text-[#084040]"
                >
                  {mostrarSenha ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
              <div className="mt-1 md:mt-2 text-right">
                <a href="/recuperar-senha" className="text-xs md:text-sm text-[#084040] hover:text-[#0D0D0D]">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 md:py-3 px-4 bg-[#084040] hover:bg-[#355e5e] text-[#D9D9D9] font-medium rounded-lg transition duration-200 flex items-center justify-center text-sm md:text-base ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Carregando...
                </>
              ) : (
                <>
                  <FiLogIn className="mr-2" size={16} />
                  Acessar Painel
                </>
              )}
            </button>

            <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-[#3A403F]">
              <p>Problemas com acesso? <a href="/suporte-corretores" className="text-[#084040] hover:text-[#0D0D0D]">Contate o suporte técnico</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}