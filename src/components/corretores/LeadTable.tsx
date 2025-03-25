/* eslint-disable @typescript-eslint/no-explicit-any */
import LeadRow from './LeadRow';

export default function LeadTable({ 
  leads, 
  handleMarkContacted 
}: {
  leads: any[];
  handleMarkContacted: (id: string) => void;
}) {
  if (leads.length === 0) {
    return (
      <div className="p-8 text-center text-[#3A403F]">
        <p className="text-lg">Nenhum lead encontrado</p>
        <p className="text-sm text-[#A1A6A2]">Quando novos leads forem atribuídos, eles aparecerão aqui!</p>
      </div>
    );
  }

  return (
    <table className="w-full">
      <thead className="bg-[#F5F5F5]">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Lead</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Contato</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Informações</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#3A403F] uppercase tracking-wider">Ações</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#A1A6A2]/20">
        {leads.map((lead) => (
          <LeadRow key={lead.id} lead={lead} handleMarkContacted={handleMarkContacted} />
        ))}
      </tbody>
    </table>
  );
}