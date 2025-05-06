export default function Tabs({
  activeTab,
  setActiveTab,
  setCurrentPage
}: {
  activeTab: 'todos' | 'contatados' | 'pendentes';
  setActiveTab: (tab: 'todos' | 'contatados' | 'pendentes') => void;
  setCurrentPage: (page: number) => void;
}) {
  return (
    <div className="flex border-b border-[#A1A6A2] overflow-x-auto">
      {(['todos', 'contatados', 'pendentes'] as const).map((tab) => (
        <button
          key={tab}
          className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap ${
            activeTab === tab 
              ? 'text-[#084040] border-b-2 border-[#084040]' 
              : 'text-[#3A403F] hover:text-[#084040]'
          }`}
          onClick={() => {
            setActiveTab(tab);
            setCurrentPage(1);
          }}
        >
          {tab === 'todos' ? 'Todos' : 
           tab === 'contatados' ? 'Contatados' : 
           'Pendentes'}
        </button>
      ))}
    </div>
  );
}