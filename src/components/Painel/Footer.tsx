export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#084040]/30 to-transparent py-6 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} N&H Associados - Painel do Corretor
            </p>
            <span className="hidden sm:block text-white/30">|</span>
            <p className="text-white/60 text-xs">
              Versão 1.0.2
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/60">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ambiente Seguro
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              Termos de Uso
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}