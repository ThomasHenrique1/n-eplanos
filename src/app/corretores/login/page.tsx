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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f7f7] to-[#e0efef] p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-[#e0e0e0] flex flex-col md:flex-row transition-all hover:shadow-xl">
        {/* Header com Logo - Área de Corretores (Lado Esquerdo) */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-[#084040] to-[#0d5a5a] flex flex-col justify-between p-8 text-white">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-center md:text-left">Área Exclusiva para Corretores</h1>
            <p className="text-[#c5d5d5] mb-6 text-center md:text-left">Acesso ao sistema interno</p>
            
            <div className="flex justify-center my-8">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <Image
                  src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//android-chrome-512x512.png"
                  alt="Logo da Corretora - Área de Corretores"
                  width={120}
                  height={120}
                  className="object-contain w-24 h-24 md:w-28 md:h-28"
                />
              </div>
            </div>
          </div>
          
          {/* Rodapé - Área de Corretores */}
          <div className="text-center mt-4">
            <p className="text-xs text-white/80">
              © {new Date().getFullYear()} Área Restrita - N&H Associados
            </p>
            <p className="text-xs text-white/60 mt-1">
              Versão 1.0.0 | Ambiente Seguro
            </p>
          </div>
        </div>

        {/* Formulário (Lado Direito) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#084040] mb-6">Faça seu login</h2>
          
          <form onSubmit={handleLogin}>
            {erro && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                <p>{erro}</p>
              </div>
            )}

            <div className="mb-5">
              <label htmlFor="email" className="block text-[#084040] font-medium mb-2 text-sm">
                E-mail Profissional
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5a6e6e]">
                  <FiMail className="text-lg" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[#d1d9d9] rounded-lg focus:ring-2 focus:ring-[#084040]/50 focus:border-[#084040] outline-none transition text-sm placeholder-[#9ca8a8]"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="senha" className="block text-[#084040] font-medium mb-2 text-sm">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5a6e6e]">
                  <FiLock className="text-lg" />
                </div>
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-[#d1d9d9] rounded-lg focus:ring-2 focus:ring-[#084040]/50 focus:border-[#084040] outline-none transition text-sm placeholder-[#9ca8a8]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5a6e6e] hover:text-[#084040] transition"
                >
                  {mostrarSenha ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              <div className="mt-2 text-right">
                <a href="/recuperar-senha" className="text-xs text-[#084040] hover:text-[#0a2e2e] transition">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-gradient-to-r from-[#084040] to-[#0d5a5a] hover:from-[#0d5a5a] hover:to-[#084040] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center text-sm shadow-md hover:shadow-lg ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Carregando...
                </>
              ) : (
                <>
                  <FiLogIn className="mr-2" size={18} />
                  Acessar Painel
                </>
              )}
            </button>

            <div className="mt-6 text-center text-sm text-[#5a6e6e]">
              <p>Problemas com acesso? <a href="/suporte-corretores" className="text-[#084040] hover:text-[#0a2e2e] font-medium transition">Contate o suporte técnico</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}