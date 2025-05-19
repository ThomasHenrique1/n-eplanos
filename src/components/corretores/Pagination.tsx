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
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border-t border-gray-200 gap-3 sm:gap-0">
      {/* Controle de itens por página */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 whitespace-nowrap">
          Itens por página:
        </span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="text-sm text-gray-800 py-1.5 pl-2 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      
      {/* Navegação entre páginas */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 text-sm font-medium rounded-md border flex items-center transition-all
            ${currentPage === 1 
              ? 'text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed' 
              : 'text-emerald-700 border-emerald-300 bg-white hover:bg-emerald-50 hover:border-emerald-400'
            }`}
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>
        
        <div className="px-4 py-1.5 text-sm text-gray-600">
          <span className="font-medium text-gray-800">{currentPage}</span> de {totalPages}
        </div>
        
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 text-sm font-medium rounded-md border flex items-center transition-all
            ${currentPage === totalPages 
              ? 'text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed' 
              : 'text-emerald-700 border-emerald-300 bg-white hover:bg-emerald-50 hover:border-emerald-400'
            }`}
        >
          Próxima
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}