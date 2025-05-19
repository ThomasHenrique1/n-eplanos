/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiCheck, FiEdit, FiMail, FiPhone, FiPhoneCall, FiSmartphone, FiUser } from "react-icons/fi";

export default function LeadRow({ lead, handleMarkContacted }: { lead: any; handleMarkContacted: (id: string) => void; }) {
  return (
    <tr key={lead.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      {/* Lead */}
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-inner">
            <FiUser size={16} className="opacity-90" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{lead.nome}</div>
            <div className="text-sm text-gray-600">{lead.idade} anos</div>
          </div>
        </div>
      </td>

      {/* Contato */}
      <td className="px-6 py-4">
        <div className="space-y-1.5">
          <div className="flex items-center text-sm text-gray-900">
            <FiMail className="text-emerald-600 mr-2" size={14} />
            <span className="truncate max-w-[180px]">{lead.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiPhone className="text-blue-600 mr-2" size={14} />
            <span>{lead.telefone}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            {lead.preferencia_contato === 'Email' ? (
              <FiMail className="text-emerald-600 mr-2" size={14} />
            ) : lead.preferencia_contato === 'Telefone' ? (
              <FiPhone className="text-blue-600 mr-2" size={14} />
            ) : (
              <FiSmartphone className="text-purple-600 mr-2" size={14} />
            )}
            <span>{lead.preferencia_contato}</span>
          </div>
        </div>
      </td>

      {/* Informações */}
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${lead.cnpj ? 'bg-emerald-50 text-emerald-800' : 'bg-gray-100 text-gray-800'}`}>
            CNPJ: {lead.cnpj ? 'Sim' : 'Não'}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${lead.plano_saude ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
            Plano Saúde: {lead.plano_saude ? 'Sim' : 'Não'}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${lead.formacao_academica ? 'bg-purple-50 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
            Formação: {lead.formacao_academica ? 'Sim' : 'Não'}
          </span>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${lead.contatado ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>
          {lead.contatado ? 'Contatado' : 'Pendente'}
        </span>
      </td>

      {/* Ações */}
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => handleMarkContacted(lead.id)}
            disabled={lead.contatado}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${lead.contatado ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
          >
            {lead.contatado ? <FiCheck size={14} /> : <FiPhoneCall size={14} />}
            <span>{lead.contatado ? 'Contatado' : 'Contatar'}</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-emerald-700 border border-emerald-200 bg-white hover:bg-emerald-50">
            <FiEdit size={14} />
            <span>Editar</span>
          </button>
        </div>
      </td>
    </tr>
  );
}