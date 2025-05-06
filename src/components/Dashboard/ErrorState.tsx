export const ErrorState = ({ error }: { error: string }) => (
  <div className="flex justify-center items-center h-screen bg-[#D9D9D9] p-4">
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md w-full text-center">
      <div className="text-red-500 mb-3 sm:mb-4 text-sm sm:text-base">
        Erro: {error}
      </div>
      <button 
        onClick={() => window.location.reload()}
        className="bg-[#084040] text-white px-4 py-2 rounded hover:bg-[#0D0D0D] transition 
                   text-sm sm:text-base w-full sm:w-auto"
      >
        Tentar Novamente
      </button>
    </div>
  </div>
);