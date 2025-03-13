'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('corretorId', data.corretorId);
      router.push('/painel/dashboard');
    } else {
      setErro(data.error || 'Erro ao fazer login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold">Login</h1>
        {erro && <p className="text-red-500">{erro}</p>}
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-6">
          <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
