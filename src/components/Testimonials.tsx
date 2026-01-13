import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Santos',
      age: '52 anos',
      text: 'Depois de seguir o guia por 3 meses, meus exames mostraram uma melhora significativa. Finalmente encontrei informações claras e confiáveis!',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      age: '45 anos',
      text: 'Estava perdido sobre o que comer. Esse guia mudou minha vida. Agora sei exatamente o que posso e o que não posso consumir.',
      rating: 5
    },
    {
      name: 'Ana Paula',
      age: '38 anos',
      text: 'As receitas são deliciosas e práticas. Não sinto que estou fazendo dieta, apenas comendo de forma inteligente. Recomendo muito!',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      age: '57 anos',
      text: 'Meu médico ficou impressionado com a melhora dos meus exames. O investimento valeu cada centavo!',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      age: '41 anos',
      text: 'Simples, direto e funciona! Já indiquei para todos os meus amigos que têm o mesmo problema.',
      rating: 5
    },
    {
      name: 'Pedro Almeida',
      age: '49 anos',
      text: 'A categorização dos alimentos facilita muito no dia a dia. Não preciso mais ficar em dúvida no mercado.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de pessoas já estão cuidando melhor da saúde do fígado com nosso guia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
              <Quote className="w-10 h-10 text-emerald-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.age}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">4.9/5</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>

            <div className="w-px h-24 bg-gray-200 hidden md:block"></div>

            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">5.000+</div>
              <div className="text-gray-600">Pessoas Transformadas</div>
            </div>

            <div className="w-px h-24 bg-gray-200 hidden md:block"></div>

            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
