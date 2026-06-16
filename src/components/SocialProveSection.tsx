import React from 'react';
import { Quote } from 'lucide-react';

interface ProvaSocial {
  text: string;
  author: string;
  role: string;
}

const SocialProveSection: React.FC = () => {
  const provaSocials: ProvaSocial[] = [
    {
      text: 'Eu estudava horas por dia e não avançava. Depois do método Precettore, finalmente consegui direção.',
      author: 'Aluno Precettore',
      role: 'Estudante de Medicina',
    },
    {
      text: 'Meu cronograma virou outro. A estratégia realmente funciona.',
      author: 'Aluno Precettore',
      role: 'Estudante de Medicina',
    },
  ];

  return (
    <section className='py-20 lg:py-28 bg-brand-primary/8 relative overflow-hidden border-t border-white/5'>
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 relative z-10'>
        {/* Cabeçalho */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-block py-2 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 border border-brand-primary/20'>
            Resultados Reais
          </span>
          <h2 className='text-3xl md:text-5xl font-black text-white leading-tight mb-6'>
            Quem aplica o método, <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
              conquista a aprovação
            </span>
          </h2>
        </div>

        {/* Depoimentos Centralizados */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {provaSocials.map((ProvaSocial, index) => (
            <div
              key={index}
              className='relative bg-brand-dark/60 border border-white/5 p-8 rounded-3xl shadow-2xl flex flex-col justify-between hover:border-brand-primary/20 transition-colors'
            >
              <div className='absolute top-6 right-8 text-brand-primary/5 pointer-events-none'>
                <Quote size={64} height='fill' />
              </div>

              <p className='text-white/90 text-lg italic leading-relaxed mb-8 relative z-10'>
                "{ProvaSocial.text}"
              </p>

              <div className='flex items-center gap-4 border-t border-white/5 pt-4'>
                <div className='w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-black text-sm'>
                  {ProvaSocial.author.charAt(0)}
                </div>
                <div>
                  <h4 className='text-white font-bold text-base'>
                    {ProvaSocial.author}
                  </h4>
                  <p className='text-brand-primary text-xs uppercase tracking-wider font-bold'>
                    {ProvaSocial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProveSection;
