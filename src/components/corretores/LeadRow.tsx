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
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-[#084040] rounded-full flex items-center justify-center text-white">
            <FiUser size={20} />
          </div>
          <div className="ml-4">
            <div className="text-base font-medium text-[#0D0D0D]">{lead.nome}</div>
            <div className="text-base text-[#3A403F]">{lead.idade} anos</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-[#0D0D0D] flex items-center gap-2">
          <FiMail className="text-[#084040]" size={18} /> {lead.email}
        </div>
        <div className="text-base text-[#0D0D0D] mt-2 flex items-center gap-2">
          <FiPhone className="text-[#084040]" size={18} /> {lead.telefone}
        </div>
        <div className="mt-2 flex items-center gap-2">
          {lead.preferencia_contato === 'Email' ? (
            <FiMail className="text-[#084040]" size={18} />
          ) : lead.preferencia_contato === 'Telefone' ? (
            <FiPhone className="text-[#084040]" size={18} />
          ) : (
            <FiSmartphone className="text-[#084040]" size={18} />
          )}
          <span className="text-sm text-[#3A403F]">{lead.preferencia_contato}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 text-sm rounded-full ${lead.cnpj ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            CNPJ: {lead.cnpj ? 'Sim' : 'Não'}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${lead.plano_saude ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
            Plano de Saúde: {lead.plano_saude ? 'Sim' : 'Não'}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${lead.formacao_academica ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
            Formação: {lead.formacao_academica ? 'Sim' : 'Não'}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${lead.contatado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {lead.contatado ? 'Contatado' : 'Pendente'}
        </span>
      </td>
      <td className="px-6 py-4 text-sm font-medium">
        <div className="flex gap-2">
          <button
            onClick={() => handleMarkContacted(lead.id)}
            disabled={lead.contatado}
            className={`flex items-center gap-1 px-3 py-1 rounded ${lead.contatado ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#084040] text-white hover:bg-[#0D0D0D]'}`}
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
          <button className="flex items-center gap-1 px-3 py-1 rounded border border-[#084040] text-[#084040] hover:bg-[#084040]/10">
            <FiEdit size={16} /> Editar
          </button>
        </div>
      </td>
    </tr>
  );
}