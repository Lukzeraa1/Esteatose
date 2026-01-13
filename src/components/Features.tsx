import { Check, Download, Search, RefreshCw, Heart, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Busca Rápida',
      description: 'Encontre qualquer alimento em segundos e saiba se pode consumir'
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Categorização Clara',
      description: 'Alimentos divididos em: permitidos, moderados e a evitar'
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Acesso Imediato',
      description: 'Receba instantaneamente após a compra, sem espera'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Atualizações Gratuitas',
      description: 'Receba novas versões com mais alimentos sem custo adicional'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Receitas Inclusas',
      description: 'Mais de 50 receitas deliciosas e amigas do fígado'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Planos de Refeição',
      description: 'Sugestões de cardápios semanais prontos para usar'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tudo que Você Precisa em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que uma simples lista, é um sistema completo para transformar sua alimentação e saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Garantia de 7 Dias ou Seu Dinheiro de Volta
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estamos tão confiantes de que nosso guia vai transformar sua relação com a alimentação que oferecemos garantia total. Se você não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">7</div>
                  <div className="text-sm text-emerald-700 font-semibold">DIAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
