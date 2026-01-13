import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGE2N2UiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            Guia Completo e Atualizado 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Cuide do seu Fígado com
            <span className="block text-emerald-600 mt-2">Alimentação Inteligente</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Descubra exatamente quais alimentos você pode comer e quais deve evitar para reverter a esteatose hepática de forma natural e segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://pay.kirvano.com/4670148e-2f51-43e9-8a53-68e5a6e3787d"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              Quero Meu Guia Alimentar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* AQUI ESTÁ O BOTÃO QUE ROLA PARA BAIXO 👇 */}
            <a 
              href="#exemplos"
              className="text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors border-2 border-gray-300 hover:border-emerald-600 cursor-pointer flex items-center justify-center"
            >
              Ver Alimentos Permitidos
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: '50+', label: 'Alimentos Listados' },
              { number: '100%', label: 'Baseado em Ciência' },
              { number: '5 min', label: 'Acesso Imediato' },
              { number: '24/7', label: 'Suporte Disponível' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
