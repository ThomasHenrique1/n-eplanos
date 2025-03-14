import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold mb-4">HealthCare</h3>
          <p className="text-gray-300">Sua saúde em primeiro lugar.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link href="/servicos" className="text-gray-300 hover:text-white">Serviços</Link></li>
            <li><Link href="/sobre" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/contato" className="text-gray-300 hover:text-white">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}