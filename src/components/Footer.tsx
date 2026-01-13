import { Heart, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-emerald-500" />
              <span className="text-white font-bold text-xl">Guia Esteatose</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ajudando pessoas a cuidarem da saúde do fígado através de alimentação inteligente e baseada em ciência.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Sobre o Guia</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a href="mailto:contato@guiaesteatose.com" className="hover:text-emerald-500 transition-colors">
                  contato@guiaesteatose.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span>Compra 100% Segura</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            <strong className="text-white">Aviso Legal:</strong> Este guia alimentar é informativo e não substitui consulta médica ou nutricional. Consulte sempre um profissional de saúde antes de fazer mudanças significativas na sua dieta.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Guia Esteatose. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
