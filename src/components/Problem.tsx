import { AlertCircle, TrendingUp, Users } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Esteatose Hepática é Mais Comum do Que Você Imagina
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhões de pessoas sofrem com fígado gorduroso, mas poucos sabem que a alimentação correta pode reverter esse quadro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-12 h-12 text-red-500" />,
              stat: '30% da população',
              description: 'tem algum grau de esteatose hepática'
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
              stat: '90% dos casos',
              description: 'podem ser revertidos com mudanças alimentares'
            },
            {
              icon: <AlertCircle className="w-12 h-12 text-yellow-500" />,
              stat: 'Silenciosa',
              description: 'a doença progride sem sintomas evidentes'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">O Problema Real:</h3>
          <ul className="space-y-3">
            {[
              'Informações conflitantes sobre o que comer',
              'Receio de escolher os alimentos errados',
              'Dificuldade em encontrar listas confiáveis',
              'Falta de orientação clara e prática',
              'Medo de piorar a condição do fígado'
            ].map((problem, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-lg">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
