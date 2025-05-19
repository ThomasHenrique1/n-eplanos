export const EmptyState = ({ 
  searchTerm, 
  setSearchTerm 
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => (
 <div className="p-6 sm:p-8 md:p-10 text-center">
  <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-white/90">
    {searchTerm ? "Nenhum resultado encontrado" : "Nenhum lead disponível"}
  </p>
  
  {searchTerm && (
    <button 
      onClick={() => setSearchTerm('')}
      className="mt-4 px-4 py-2.5 bg-gradient-to-r from-[#084040] to-[#0a5e5e] text-white rounded-lg 
                hover:from-[#0a5e5e] hover:to-[#084040] transition-all duration-300
                shadow-md hover:shadow-lg text-sm sm:text-base font-medium"
    >
      Limpar busca e ver todos
    </button>
  )}
  
  {!searchTerm && (
    <p className="text-sm sm:text-base text-gray-500 dark:text-white/60 mt-3 max-w-md mx-auto">
      Quando novos leads forem atribuídos, eles aparecerão aqui automaticamente
    </p>
  )}
</div>
);