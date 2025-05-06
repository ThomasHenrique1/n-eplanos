/* eslint-disable @typescript-eslint/no-explicit-any */
import LeadRow from "./LeadRow";

export default function LeadTable({ 
  leads, 
  handleMarkContacted 
}: {
  leads: any[];
  handleMarkContacted: (id: string) => void;
}) {
  if (leads.length === 0) {
    return (
      <div className="p-4 sm:p-8 text-center text-[#3A403F]">
        <p className="text-base sm:text-lg">Nenhum lead encontrado</p>
        <p className="text-xs sm:text-sm text-[#A1A6A2]">Novos leads aparecerão aqui!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead className="bg-[#F5F5F5]">
          <tr>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-[#3A403F] uppercase">Lead</th>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-[#3A403F] uppercase">Contato</th>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-[#3A403F] uppercase">Informações</th>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-[#3A403F] uppercase">Status</th>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-[#3A403F] uppercase">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#A1A6A2]/20">
          {leads.map((lead) => (
            <LeadRow key={lead.id} lead={lead} handleMarkContacted={handleMarkContacted} />
          ))}
        </tbody>
      </table>
    </div>
  );
}