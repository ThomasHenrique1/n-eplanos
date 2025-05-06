import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ 
  searchTerm, 
  setSearchTerm,
  setCurrentPage
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
}) => (
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FiSearch className="text-[#3A403F] text-sm sm:text-base" />
    </div>
    <input
      type="text"
      placeholder="Buscar..."
      className="pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-[#A1A6A2] rounded-lg focus:ring-2 focus:ring-[#084040] focus:border-[#084040] outline-none transition w-full text-sm sm:text-base"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
      }}
    />
  </div>
);