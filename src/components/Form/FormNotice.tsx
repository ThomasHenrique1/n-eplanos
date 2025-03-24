import { FaExclamationTriangle, FaClipboardList, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const FormNotice = () => (
  <div className="space-y-5 mt-6">
    {/* Bloco de Aviso */}
    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 flex items-start gap-4 shadow-sm">
      <FaExclamationTriangle className="text-amber-500 text-xl mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-amber-800 mb-1">Transparência no uso dos dados:</p>
        <p className="text-sm text-amber-700 leading-relaxed">
          Todas as informações solicitadas são utilizadas <span className="font-semibold">exclusivamente</span> para proporcionar um atendimento personalizado e de qualidade. 
          Garantimos que <span className="font-semibold">nenhum dado será compartilhado</span> ou vendido a terceiros.
        </p>
      </div>
    </div>

    {/* Bloco de Orientação */}
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-xs">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
          <FaClipboardList className="text-lg" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Como podemos te ajudar melhor?</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Verifique se todos os dados estão corretos</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-1 rounded-full mt-0.5">
                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Selecione seu meio de contato preferido:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs">
                    <FaPhone /> Ligação
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-xs">
                    <FaWhatsapp /> WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs">
                    <FaEnvelope /> Email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);