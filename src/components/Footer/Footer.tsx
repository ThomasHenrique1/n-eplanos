import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#084040] to-[#0a4d4d] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo e Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//android-chrome-512x512.png"
                alt="N&H Associados"
                width={180}
                height={180}
                className="h-20 w-auto md:h-24 hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-[#A1C7D6] text-center md:text-left max-w-xs">
              N&H Associados é uma empresa especializada em consultoria e assessoria, oferecendo soluções personalizadas para atender às necessidades de nossos clientes. Nossa missão é proporcionar excelência em serviços e resultados eficazes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-5 text-[#A1C7D6] border-b border-[#1a6a6a] pb-2">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", path: "/" },
                { name: "Serviços", path: "/servicos" },
                { name: "Sobre Nós", path: "/sobre" },
                { name: "Contato", path: "/formulario" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="text-[#D9D9D9] hover:text-[#A1C7D6] transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-5 text-[#A1C7D6] border-b border-[#1a6a6a] pb-2">
              Contato
            </h4>
            <div className="mb-6">
              <p className="text-[#D9D9D9] mb-3">contato@nheassociados.com</p>
              <p className="text-[#D9D9D9]">(11) 99232-0742</p>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-5">
              {[
                { icon: <FaWhatsapp />, url: "https://wa.me/5511992320742" },
                { icon: <FaFacebook />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
                { icon: <FaLinkedin />, url: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#D9D9D9] hover:text-[#A1C7D6] transition-colors"
                  aria-label={`Link para ${social.icon.type.displayName}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-6 border-t border-[#1a6a6a] text-center text-[#A1A6A2] text-sm">
          <p>© {new Date().getFullYear()} N&H Associados. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/politica" className="hover:text-[#A1C7D6] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-[#A1C7D6] transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}