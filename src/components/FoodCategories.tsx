import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function FoodCategories() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exemplos do Que Você Vai Encontrar
          </h2>
          <p className="text-xl text-gray-600">
            Veja alguns exemplos de alimentos categorizados no guia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-emerald-900">Pode Comer</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Vegetais verdes escuros',
                'Frutas cítricas',
                'Peixes ricos em ômega-3',
                'Aveia e grãos integrais',
                'Nozes e amêndoas',
                'Azeite de oliva',
                'Alho e cebola',
                'Chás naturais'
              ].map((food, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-yellow-900">Com Moderação</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Carnes magras',
                'Ovos',
                'Laticínios desnatados',
                'Batata doce',
                'Arroz integral',
                'Mel',
                'Chocolate amargo (70%+)',
                'Café sem açúcar'
              ].map((food, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">Evitar</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Bebidas alcoólicas',
                'Frituras em geral',
                'Açúcar refinado',
                'Refrigerantes',
                'Carnes processadas',
                'Gordura trans',
                'Fast food',
                'Alimentos ultraprocessados'
              ].map((food, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Estes são apenas alguns exemplos. O guia completo contém mais de 50 alimentos!
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Quero Acesso ao Guia Completo
          </button>
        </div>
      </div>
    </section>
  );
}
