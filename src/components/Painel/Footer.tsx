export default function Footer() {
    return(
        <footer className="text-center text-sm text-[#A1A6A2] border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} N&H Associados - Painel do Corretor</p>
          <p className="text-xs mt-1">Versão 1.0.2</p>
          <p className="text-xs mt-1">Ambiente Seguro | Termos de Uso</p>
        </footer>
    )
}