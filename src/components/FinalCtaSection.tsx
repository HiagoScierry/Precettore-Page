import React from 'react';
import { ArrowRight, Sparkles, Flame, Crown } from 'lucide-react';

const FinalCtaSection: React.FC = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById('programs-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='py-24 lg:py-36 relative overflow-hidden bg-brand-dark flex items-center justify-center'>
      {/* Efeito de luz de fundo em degradê para dar o fechamento premium */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-75 bg-linear-to-t from-brand-primary/10 to-transparent blur-3xl pointer-events-none'></div>

      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 relative z-10 w-full text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Headline de Fechamento */}
          <h2 className='text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight'>
            Sua aprovação não pode <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
              esperar o próximo ano
            </span>
          </h2>

          <p className='text-xl md:text-2xl text-brand-light/80 font-medium max-w-2xl mx-auto mb-12 leading-relaxed'>
            Escolha seu programa e comece agora a estudar com estratégia, foco e
            direção.
          </p>

          {/* Grid de Ações Rápidas dos 3 Planos */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8'>
            {/* Botão Start */}
            <button
              onClick={scrollToPrograms}
              className='flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold py-4 px-6 rounded-2xl transition-all group'
            >
              <Sparkles size={16} className='text-blue-400' />
              <span>Start</span>
              <ArrowRight
                size={14}
                className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'
              />
            </button>

            {/* Botão Plus */}
            <button
              onClick={scrollToPrograms}
              className='flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold py-4 px-6 rounded-2xl transition-all group'
            >
              <Flame size={16} className='text-orange-500' />
              <span>Plus</span>
              <ArrowRight
                size={14}
                className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'
              />
            </button>

            {/* Botão Elite (Destacado) */}
            <button
              onClick={scrollToPrograms}
              className='flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-brand-dark font-black py-4 px-6 rounded-2xl transition-all shadow-xl shadow-brand-primary/10 group'
            >
              <Crown size={16} />
              <span>Elite</span>
              <ArrowRight
                size={14}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
