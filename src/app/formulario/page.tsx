"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    telefone: "",
    email: "",
    preferencia_contato: false,
    cnpj: false,
    plano_saude: false,
    formacao_academica: false,
    tipoCotacao: "",  // Novo campo para o tipo de cotação
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      setMessage("Lead cadastrado com sucesso!");
      setForm({
        nome: "",
        idade: "",
        telefone: "",
        email: "",
        preferencia_contato: false,
        cnpj: false,
        plano_saude: false,
        formacao_academica: false,
        tipoCotacao: "",  // Resetando o campo tipoCotacao
      });
    } else {
      setMessage(`Erro: ${data.error}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Faça sua cotação</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="idade"
          value={form.idade}
          onChange={handleChange}
          placeholder="Idade"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          placeholder="Telefone"
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="border p-2 rounded"
        />

        <label className="flex items-center">
          <input
            type="checkbox"
            name="preferencia_contato"
            checked={form.preferencia_contato}
            onChange={handleChange}
            className="mr-2"
          />
          Preferência de contato
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="cnpj"
            checked={form.cnpj}
            onChange={handleChange}
            className="mr-2"
          />
          Possui CNPJ?
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="plano_saude"
            checked={form.plano_saude}
            onChange={handleChange}
            className="mr-2"
          />
          Está interessado em plano de saúde?
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="formacao_academica"
            checked={form.formacao_academica}
            onChange={handleChange}
            className="mr-2"
          />
          Tem formação acadêmica?
        </label>

        {/* Campo de tipo de cotação */}
        <div className="flex flex-col">
          <label htmlFor="tipoCotacao" className="font-medium">Tipo de Cotação</label>
          <select
            name="tipoCotacao"
            value={form.tipoCotacao}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          >
            <option value="">Selecione o tipo de cotação</option>
            <option value="Cotação gratuita">Cotação gratuita</option>
            <option value="Venda de plano de saúde">Venda de plano de saúde</option>
            <option value="Consultoria">Consultoria</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
