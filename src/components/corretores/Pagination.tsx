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
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-[#A1A6A2]/20 bg-[#F5F5F5]">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-sm text-[#3A403F] mr-2">Leads por página:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-[#A1A6A2] rounded text-sm p-1 bg-white"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-[#084040] border-[#084040] hover:bg-[#084040]/10"
          >
            Anterior
          </button>
          <span className="text-sm text-[#3A403F]">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-[#084040] border-[#084040] hover:bg-[#084040]/10"
          >
            Próxima
          </button>
        </div>
      </div>
    );
  }