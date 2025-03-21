/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { FaUser, FaBirthdayCake, FaPhone, FaEnvelope, FaBuilding, FaHeartbeat, FaGraduationCap, FaFileAlt, FaExclamationTriangle } from "react-icons/fa";
import InputField from "../../components/Form/InputField";
import SelectField from "../../components/Form/SelectField";
import Modal from "../../components/Form/Modal";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    telefone: "",
    email: "",
    preferencia_contato: "",
    cnpj: false, // Alterado para booleano
    plano_saude: false, // Alterado para booleano
    formacao_academica: false, // Alterado para booleano
    tipoCotacao: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Verificar se o campo é booleano e converter para true/false
    if (name === "cnpj" || name === "plano_saude" || name === "formacao_academica") {
      setForm((prev) => ({
        ...prev,
        [name]: value === "Sim", // Converte "Sim" para true e "Não" para false
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const dadosParaEnviar = {
      ...form,
      // Os valores já estão no formato correto (booleano)
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnviar),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setIsSuccessModalOpen(true); // Abre o modal de sucesso
        setForm({
          nome: "",
          idade: "",
          telefone: "",
          email: "",
          preferencia_contato: "",
          cnpj: false,
          plano_saude: false,
          formacao_academica: false,
          tipoCotacao: "",
        });
      } else {
        setIsErrorModalOpen(true); // Abre o modal de erro
        setErrorMessage(data.error || "Ocorreu um erro ao cadastrar.");
      }
    } catch (error) {
      setIsErrorModalOpen(true); // Abre o modal de erro
      setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  // Opções para os campos de seleção "Sim" ou "Não"
  const simNaoOptions = [
    { value: "", label: "Selecione" },
    { value: "Sim", label: "Sim" },
    { value: "Não", label: "Não" },
  ];

  const tipoCotacaoOptions = [
    { value: "", label: "Selecione o tipo de cotação" },
    { value: "Cotação gratuita", label: "Cotação gratuita" },
    { value: "Venda de plano de saúde", label: "Venda de plano de saúde" },
    { value: "Consultoria", label: "Consultoria" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-xl border border-[#E0E0E0]">
        <h2 className="text-3xl font-bold text-[#084040] mb-6 text-center">
          Faça sua cotação
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Linha 1: Nome, Idade, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaUser className="text-[#084040]" /> Nome
              </label>
              <InputField
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Coloque seu nome"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaBirthdayCake className="text-[#084040]" /> Idade
              </label>
              <InputField
                type="number"
                name="idade"
                value={form.idade}
                onChange={handleChange}
                placeholder="Coloque sua idade"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaEnvelope className="text-[#084040]" /> Email
              </label>
              <InputField
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Coloque seu email"
                required
              />
            </div>
          </div>

          {/* Linha 2: Telefone, Possui CNPJ?, Possui plano de saúde ativo? */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaPhone className="text-[#084040]" /> Telefone
              </label>
              <InputField
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Coloque seu telefone"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaBuilding className="text-[#084040]" /> Possui CNPJ?
              </label>
              <SelectField
                name="cnpj"
                value={form.cnpj ? "Sim" : "Não"} // Exibe como "Sim" ou "Não" para o usuário
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaHeartbeat className="text-[#084040]" /> Possui plano de saúde ativo?
              </label>
              <SelectField
                name="plano_saude"
                value={form.plano_saude ? "Sim" : "Não"} // Exibe como "Sim" ou "Não" para o usuário
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </div>
          </div>

          {/* Linha 3: Tem formação acadêmica?, Tipo de Cotação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaGraduationCap className="text-[#084040]" /> Tem formação acadêmica?
              </label>
              <SelectField
                name="formacao_academica"
                value={form.formacao_academica ? "Sim" : "Não"} // Exibe como "Sim" ou "Não" para o usuário
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#3A403F] font-medium flex items-center gap-2">
                <FaFileAlt className="text-[#084040]" /> Tipo de Cotação
              </label>
              <SelectField
                name="tipoCotacao"
                value={form.tipoCotacao}
                onChange={handleChange}
                options={tipoCotacaoOptions}
                required
              />
            </div>
          </div>

          {/* Aviso sobre os dados */}
          <div className="bg-[#FFF3CD] p-4 rounded-lg border border-[#FFEEBA] flex items-center gap-3">
            <FaExclamationTriangle className="text-[#856404] text-xl" />
            <p className="text-sm text-[#856404]">
              <span className="font-semibold">Aviso:</span> Todas as informações solicitadas são
              utilizadas exclusivamente para proporcionar um atendimento personalizado e de
              qualidade. Garantimos que nenhum dado será compartilhado ou vendido a terceiros.
            </p>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            className="bg-[#084040] text-white p-3 rounded-lg hover:bg-[#0D0D0D] transition-colors duration-300 font-medium text-lg"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {/* Modal de Sucesso */}
        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="Cadastro realizado com sucesso!"
          message="Seus dados foram enviados com sucesso. Entraremos em contato em breve."
          icon={'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//icon-sucesso.png'}
          backgroundColor="bg-green-100"
          textColor="text-green-800"
        />

        {/* Modal de Erro */}
        <Modal
          isOpen={isErrorModalOpen}
          onClose={() => setIsErrorModalOpen(false)}
          title="Erro no cadastro"
          message={errorMessage || "Ocorreu um erro ao processar sua solicitação."}
          icon={'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//icon-erro.png'}
          backgroundColor="bg-red-100"
          textColor="text-red-800"
        />
      </div>
    </div>
  );
}
