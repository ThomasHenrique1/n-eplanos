import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#084040] text-white py-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/" className="flex flex-col items-start">
            <span className="text-[#A1C7D6] leading-none ml-[25px] font-extrabold">N&H</span>
            <span className="text-[#D9D9D9] text-xl leading-tight font-bold ">Associados</span>
          </Link>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-[#A1A6A2] hover:text-white">Home</Link></li>
            <li><Link href="/servicos" className="text-[#A1A6A2] hover:text-white">Serviços</Link></li>
            <li><Link href="/sobre" className="text-[#A1A6A2] hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/contato" className="text-[#A1A6A2] hover:text-white">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-[#A1A6A2] hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-[#A1A6A2] hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-[#A1A6A2] hover:text-white"><FaLinkedin /></a>
            <a href="#" className="text-[#A1A6A2] hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
