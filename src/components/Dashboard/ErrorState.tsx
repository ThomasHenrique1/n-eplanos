export const ErrorState = ({ error }: { error: string }) => (
    <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-red-500 mb-4">Erro: {error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#084040] text-white px-4 py-2 rounded hover:bg-[#0D0D0D] transition"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );