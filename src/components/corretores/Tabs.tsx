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
      <div className="flex border-b border-[#A1A6A2]">
        {(['todos', 'contatados', 'pendentes'] as const).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium ${
              activeTab === tab 
                ? 'text-[#084040] border-b-2 border-[#084040]' 
                : 'text-[#3A403F]'
            }`}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    );
  }