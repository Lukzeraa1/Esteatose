import { ArrowRight, Check, Clock, Shield } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 mb-8">
            Investimento único para uma saúde duradoura
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 text-gray-900 shadow-2xl max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Oferta por Tempo Limitado
            </div>

            <div className="mb-6">
              <div className="text-gray-500 line-through text-2xl mb-2">R$ 49,00</div>
              <div className="text-6xl font-bold text-emerald-600 mb-2">R$ 16,90</div>
              <div className="text-gray-600">ou 3x de R$ 5,63</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Guia Completo com 50+ Alimentos',
              '50+ Receitas Saudáveis e Saborosas',
              'Planos de Refeição Semanais',
              'Atualizações Gratuitas para Sempre',
              'Suporte via E-mail',
              'Garantia de 7 Dias'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 mb-6">
            Garantir Meu Acesso Agora
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Compra Segura</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Garantido</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-emerald-100 text-lg">
            Junte-se a mais de 5.000 pessoas que já transformaram sua saúde
          </p>
        </div>
      </div>
    </section>
  );
}
