/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { 
  FaUser, FaBirthdayCake, FaPhone, FaEnvelope, 
  FaBuilding, FaHeartbeat, FaGraduationCap, 
  FaComments
} from "react-icons/fa";

import { FormFieldWrapper } from "../../components/Form/FormFieldWrapper";
import { FormNotice } from "../../components/Form/FormNotice";
import InputField from "@/components/Form/InputField";
import SelectField from "@/components/Form/SelectField";
import Modal from "@/components/Form/Modal";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    telefone: "",
    email: "",
    preferencia_contato: "",
    cnpj: null as boolean | null,
    plano_saude: null as boolean | null,
    formacao_academica: null as boolean | null,
  });

  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Função para debug - remove depois de testar
  useEffect(() => {
    console.log("Estado atualizado:", {
      ...form,
      cnpj: form.cnpj,
      plano_saude: form.plano_saude,
      formacao_academica: form.formacao_academica
    });
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setForm((prev) => {
      let newValue: string | boolean | null = value;
  
      if (["cnpj", "plano_saude", "formacao_academica"].includes(name)) {
        newValue = value === "Sim" ? true : value === "Não" ? false : null;
      }
  
      console.log(`Campo ${name} alterado para:`, newValue); // Debug
      return { ...prev, [name]: newValue };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
  
    // Garantir que os valores estejam como booleanos
    const formData = {
      ...form,
      cnpj: form.cnpj === true ? "Sim" : form.cnpj === false ? "Não" : null,
      plano_saude: form.plano_saude === true ? "Sim" : form.plano_saude === false ? "Não" : null,
      formacao_academica: form.formacao_academica === true ? "Sim" : form.formacao_academica === false ? "Não" : null,
    };
  
    console.log("Dados sendo enviados:", formData);
  
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      setLoading(false);
  
      if (response.ok) {
        setIsSuccessModalOpen(true);
        setForm({
          nome: "",
          idade: "",
          telefone: "",
          email: "",
          preferencia_contato: "",
          cnpj: null,
          plano_saude: null,
          formacao_academica: null,
        });
      } else {
        setIsErrorModalOpen(true);
        setErrorMessage(data.error || "Ocorreu um erro ao cadastrar.");
      }
    } catch (error) {
      setIsErrorModalOpen(true);
      setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  const simNaoOptions = [
    { value: "", label: "Selecione" },
    { value: "Sim", label: "Sim" },
    { value: "Não", label: "Não" },
  ];

  const preferenciaContatoOptions = [
    { value: "", label: "Selecione" },
    { value: "Telefone", label: "Ligação Telefônica" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Email", label: "E-mail" }
  ];

  // Função para converter valor booleano para exibição no select
  const getBooleanSelectValue = (value: boolean | null): string => {
    if (value === true) return "Sim";
    if (value === false) return "Não";
    return "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-xl border border-[#E0E0E0]">
        <h2 className="text-3xl font-bold text-[#084040] mb-6 text-center">
          Faça sua cotação
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Linha 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormFieldWrapper icon={<FaUser className="text-[#084040]" />} label="Nome">
              <InputField
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Coloque seu nome"
                required
              />
            </FormFieldWrapper>

            <FormFieldWrapper icon={<FaBirthdayCake className="text-[#084040]" />} label="Idade">
              <InputField
                type="number"
                name="idade"
                value={form.idade}
                onChange={handleChange}
                placeholder="Coloque sua idade"
                required
              />
            </FormFieldWrapper>

            <FormFieldWrapper icon={<FaEnvelope className="text-[#084040]" />} label="Email">
              <InputField
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Coloque seu email"
                required
              />
            </FormFieldWrapper>
          </div>

          {/* Linha 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormFieldWrapper icon={<FaPhone className="text-[#084040]" />} label="Telefone">
              <InputField
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Coloque seu telefone"
                required
              />
            </FormFieldWrapper>

            <FormFieldWrapper icon={<FaComments className="text-[#084040]" />} label="Preferência de Contato">
              <SelectField
                name="preferencia_contato"
                value={form.preferencia_contato}
                onChange={handleChange}
                options={preferenciaContatoOptions}
                required
              />
            </FormFieldWrapper>

            <FormFieldWrapper icon={<FaBuilding className="text-[#084040]" />} label="Possui CNPJ?">
              <SelectField
                name="cnpj"
                value={getBooleanSelectValue(form.cnpj)}
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </FormFieldWrapper>
          </div>

          {/* Linha 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormFieldWrapper icon={<FaHeartbeat className="text-[#084040]" />} label="Possui plano de saúde ativo?">
              <SelectField
                name="plano_saude"
                value={getBooleanSelectValue(form.plano_saude)}
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </FormFieldWrapper>

            <FormFieldWrapper icon={<FaGraduationCap className="text-[#084040]" />} label="Tem formação acadêmica?">
              <SelectField
                name="formacao_academica"
                value={getBooleanSelectValue(form.formacao_academica)}
                onChange={handleChange}
                options={simNaoOptions}
                required
              />
            </FormFieldWrapper>
          </div>

          <button
            type="submit"
            className="bg-[#084040] text-white p-3 rounded-lg hover:bg-[#0D0D0D] transition-colors duration-300 font-medium text-lg"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          <FormNotice />
        </form>

        {/* Modais */}
        <Modal
          isOpen={isSuccessModalOpen || isErrorModalOpen}
          onClose={() => {
            setIsSuccessModalOpen(false);
            setIsErrorModalOpen(false);
          }}
          title={isSuccessModalOpen ? "Cadastro realizado com sucesso!" : "Erro no cadastro"}
          message={isSuccessModalOpen 
            ? "Seus dados foram enviados com sucesso. Entraremos em contato em breve." 
            : errorMessage || "Ocorreu um erro ao processar sua solicitação."
          }
          type={isSuccessModalOpen ? 'success' : 'error'}
        />
      </div>
    </div>
  );
}
