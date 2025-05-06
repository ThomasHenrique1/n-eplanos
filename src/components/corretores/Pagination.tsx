export default function Pagination({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages
}: {
  itemsPerPage: number;
  setItemsPerPage: (size: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 border-t border-[#A1A6A2]/20 bg-[#F5F5F5] gap-3 sm:gap-0">
      <div className="flex items-center">
        <span className="text-xs sm:text-sm text-[#3A403F] mr-2 whitespace-nowrap">
          Itens por página:
        </span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border border-[#A1A6A2] rounded text-xs sm:text-sm p-1 sm:p-1.5 bg-white"
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 sm:px-3 py-1 border rounded disabled:opacity-50 bg-white text-[#084040] border-[#084040] hover:bg-[#084040]/10 text-xs sm:text-sm whitespace-nowrap"
        >
          Anterior
        </button>
        
        <span className="text-xs sm:text-sm text-[#3A403F] whitespace-nowrap">
          {currentPage} de {totalPages}
        </span>
        
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 sm:px-3 py-1 border rounded disabled:opacity-50 bg-white text-[#084040] border-[#084040] hover:bg-[#084040]/10 text-xs sm:text-sm whitespace-nowrap"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}