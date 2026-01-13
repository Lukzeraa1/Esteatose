import { Sparkles, Shield, BookOpen } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            A Solução que Você Precisa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guia Alimentar Completo para Esteatose Hepática
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Um guia prático, científico e fácil de seguir com todos os alimentos categorizados para você tomar decisões seguras todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="w-12 h-12" />,
              title: 'Lista Completa',
              description: 'Mais de 200 alimentos categorizados: pode comer, evitar ou comer com moderação'
            },
            {
              icon: <Shield className="w-12 h-12" />,
              title: 'Base Científica',
              description: 'Informações validadas por estudos e orientações nutricionais atualizadas'
            },
            {
              icon: <Sparkles className="w-12 h-12" />,
              title: 'Simples de Usar',
              description: 'Consulte rapidamente antes das refeições e faça escolhas inteligentes'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-emerald-50 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
