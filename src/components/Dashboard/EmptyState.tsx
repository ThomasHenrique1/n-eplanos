export const EmptyState = ({ 
  searchTerm, 
  setSearchTerm 
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => (
  <div className="p-4 sm:p-6 md:p-8 text-center text-[#3A403F]">
    <p className="text-base sm:text-lg md:text-xl">
      {searchTerm ? "Nenhum resultado encontrado" : "Nenhum lead disponível"}
    </p>
    {searchTerm && (
      <button 
        onClick={() => setSearchTerm('')}
        className="mt-2 sm:mt-3 px-3 py-1.5 sm:py-2 bg-[#084040] text-white rounded-lg hover:bg-[#0D5D5D] transition-colors text-sm sm:text-base"
      >
        Limpar busca e ver todos
      </button>
    )}
    {!searchTerm && (
      <p className="text-xs sm:text-sm text-[#A1A6A2] mt-2">
        Quando novos leads forem atribuídos, eles aparecerão aqui
      </p>
    )}
  </div>
);