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
  <div className="relative mt-4 md:mt-0 w-full md:w-auto">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FiSearch className="text-[#3A403F]" />
    </div>
    <input
      type="text"
      placeholder="Buscar por nome, email ou telefone..."
      className="pl-10 pr-20 py-2 border border-[#A1A6A2] rounded-lg focus:ring-2 focus:ring-[#084040] focus:border-[#084040] outline-none transition w-full"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
      }}
    />
  </div>
);