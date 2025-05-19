/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiUser, FiMail, FiPhone, FiCheck, FiPhoneCall, FiEdit, FiSmartphone } from 'react-icons/fi';

export default function LeadCard({ 
  lead, 
  handleMarkContacted 
}: {
  lead: any;
  handleMarkContacted: (id: string) => void;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-inner">
            <FiUser size={18} className="opacity-90" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{lead.nome}</h3>
            <div className="flex items-center mt-1">
              <span className="text-sm font-medium text-gray-600">{lead.idade} anos</span>
              <span className={`ml-3 px-2 py-0.5 text-xs font-semibold rounded-full ${lead.contatado ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>
                {lead.contatado ? 'Contatado' : 'Pendente'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="my-4 border-t border-gray-100"></div>

      {/* Contato */}
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
            <FiMail size={16} />
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium text-gray-500">E-mail</p>
            <p className="text-sm font-medium text-gray-900 truncate">{lead.email}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <FiPhone size={16} />
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium text-gray-500">Telefone</p>
            <p className="text-sm font-medium text-gray-900">{lead.telefone}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
            {lead.preferencia_contato === 'Email' ? (
              <FiMail size={16} />
            ) : lead.preferencia_contato === 'Telefone' ? (
              <FiPhone size={16} />
            ) : (
              <FiSmartphone size={16} />
            )}
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium text-gray-500">Preferência</p>
            <p className="text-sm font-medium text-gray-900">{lead.preferencia_contato}</p>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="my-4 border-t border-gray-100"></div>

      {/* Informações */}
      <div className="flex flex-wrap gap-2">
        <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center ${lead.cnpj ? 'bg-emerald-50 text-emerald-800' : 'bg-gray-100 text-gray-800'}`}>
          <span>CNPJ:</span>
          <span className="ml-1 font-bold">{lead.cnpj ? 'Sim' : 'Não'}</span>
        </div>
        <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center ${lead.plano_saude ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
          <span>Plano Saúde:</span>
          <span className="ml-1 font-bold">{lead.plano_saude ? 'Sim' : 'Não'}</span>
        </div>
        <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center ${lead.formacao_academica ? 'bg-purple-50 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
          <span>Formação:</span>
          <span className="ml-1 font-bold">{lead.formacao_academica ? 'Sim' : 'Não'}</span>
        </div>
      </div>

      {/* Ações */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => handleMarkContacted(lead.id)}
          disabled={lead.contatado}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${lead.contatado ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm'}`}
        >
          {lead.contatado ? (
            <>
              <FiCheck size={16} /> Contatado
            </>
          ) : (
            <>
              <FiPhoneCall size={16} /> Contatar
            </>
          )}
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-700 border border-emerald-200 bg-white hover:bg-emerald-50 active:bg-emerald-100 transition-all shadow-sm">
          <FiEdit size={16} /> Editar
        </button>
      </div>
    </div>
  );
}