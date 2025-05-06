/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiUser, FiMail, FiPhone, FiCheck, FiPhoneCall, FiEdit, FiSmartphone } from 'react-icons/fi';

export default function LeadRow({ 
  lead, 
  handleMarkContacted 
}: {
  lead: any;
  handleMarkContacted: (id: string) => void;
}) {
  return (
    <tr key={lead.id} className="hover:bg-[#F9F9F9]">
      {/* Célula Lead */}
      <td className="px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:h-12 w-10 sm:w-12 bg-[#084040] rounded-full flex items-center justify-center text-white">
            <FiUser className="text-sm sm:text-base" size={16} />
          </div>
          <div className="ml-3 sm:ml-4">
            <div className="text-sm sm:text-base font-medium text-[#0D0D0D]">{lead.nome}</div>
            <div className="text-xs sm:text-sm text-[#3A403F] font-bold">{lead.idade} anos</div>
          </div>
        </div>
      </td>

      {/* Célula Contato (com FiSmartphone mantido) */}
      <td className="px-3 sm:px-6 py-3 sm:py-4">
        <div className="text-xs sm:text-sm text-[#0D0D0D] flex items-center gap-1 sm:gap-2">
          <FiMail className="text-[#084040] min-w-[16px]" size={14} />
          <span className="truncate max-w-[80px] sm:max-w-none font-bold">{lead.email}</span>
        </div>
        <div className="text-xs sm:text-sm text-[#0D0D0D] mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2">
          <FiPhone className="text-[#084040] min-w-[16px]" size={14} />
          <span className='text-xs sm:text-sm text-[#3A403F] font-bold'>{lead.telefone}</span>
        </div>
        <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2">
          {lead.preferencia_contato === 'Email' ? (
            <FiMail className="text-[#084040] min-w-[16px]" size={14} />
          ) : lead.preferencia_contato === 'Telefone' ? (
            <FiPhone className="text-[#084040] min-w-[16px]" size={14} />
          ) : (
            <FiSmartphone className="text-[#084040] min-w-[16px]" size={14} />
          )}
          <span className="text-xs sm:text-sm text-[#3A403F] font-bold">{lead.preferencia_contato}</span>
        </div>
      </td>

      {/* Célula Informações */}
      <td className="px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full semibold ${lead.cnpj ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            CNPJ: {lead.cnpj ? 'Sim' : 'Não'}
          </span>
          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full font-semibold ${lead.plano_saude ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
            Plano de Saúde: {lead.plano_saude ? 'Sim' : 'Não'}
          </span>
          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full semibold ${lead.formacao_academica ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
            Formação: {lead.formacao_academica ? 'Sim' : 'Não'}
          </span>
        </div>
      </td>

      {/* Célula Status */}
      <td className="px-3 sm:px-6 py-3 sm:py-4">
        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold rounded-full ${lead.contatado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {lead.contatado ? 'Contatado' : 'Pendente'}
        </span>
      </td>

      {/* Célula Ações */}
      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium">
        <div className="flex gap-1 sm:gap-2">
          <button
            onClick={() => handleMarkContacted(lead.id)}
            disabled={lead.contatado}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded ${lead.contatado ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#084040] text-white hover:bg-[#0D0D0D]'}`}
          >
            {lead.contatado ? (
              <>
                <FiCheck size={14} className="sm:size-4" /> 
                <span className="hidden sm:inline font">Contatado</span>
              </>
            ) : (
              <>
                <FiPhoneCall size={14} className="sm:size-4" /> 
                <span className="hidden sm:inline">Contatar</span>
              </>
            )}
          </button>
          <button className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded border border-[#084040] text-[#084040] hover:bg-[#084040]/10">
            <FiEdit size={14} className="sm:size-4" />
            <span className="hidden sm:inline">Editar</span>
          </button>
        </div>
      </td>
    </tr>
  );
}