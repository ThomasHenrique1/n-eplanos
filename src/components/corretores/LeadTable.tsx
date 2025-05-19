/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiUser } from 'react-icons/fi';
import LeadRow from "./LeadRow";
import LeadCard from "./LeadCard";

export default function LeadTable({ 
  leads, 
  handleMarkContacted 
}: {
  leads: any[];
  handleMarkContacted: (id: string) => void;
}) {
  if (leads.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <FiUser className="text-gray-400" size={32} />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum lead encontrado</h3>
        <p className="text-gray-500">Novos leads aparecerão aqui automaticamente</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Tabela para desktop */}
      <div className="hidden md:block">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contato
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Informações
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <LeadRow key={lead.id} lead={lead} handleMarkContacted={handleMarkContacted} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards para mobile */}
      <div className="md:hidden space-y-3 px-4 py-3">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} handleMarkContacted={handleMarkContacted} />
        ))}
      </div>
    </div>
  );
}