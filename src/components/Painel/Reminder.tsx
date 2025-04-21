import { FiClock, FiMail } from "react-icons/fi";

export default function Reminder() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiClock className="text-yellow-400" /> Lembretes Automáticos
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></span>
              <span>Leads com mais de 3 dias recebem alerta amarelo</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
              <span>Leads com 5 dias são removidos automaticamente</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
              <span>Novos leads destacados em verde</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiMail className="text-blue-400" /> Resumo Diário por E-mail
          </h3>
          <p className="text-sm mb-4">
            Você receberá um e-mail todas as manhãs com:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>•</span> Lista de leads não contatados
            </li>
            <li className="flex items-center gap-2">
              <span>•</span> Lembretes de leads urgentes
            </li>
            <li className="flex items-center gap-2">
              <span>•</span> Estatísticas de desempenho
            </li>
          </ul>
        </div>
      </div>

    )
}