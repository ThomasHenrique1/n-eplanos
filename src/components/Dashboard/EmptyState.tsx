export const EmptyState = ({ 
    searchTerm, 
    setSearchTerm 
  }: {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
  }) => (
    <div className="p-8 text-center text-[#3A403F]">
      <p className="text-lg">Nenhum lead encontrado</p>
      {searchTerm && (
        <button 
          onClick={() => setSearchTerm('')}
          className="mt-2 text-[#084040] hover:underline"
        >
          Limpar busca
        </button>
      )}
    </div>
  );