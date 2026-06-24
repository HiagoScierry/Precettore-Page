import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    'Tempo demais no conteúdo errado',
    'Excesso de teoria que nunca cai',
    'Falta de direção clara',
    'Ansiedade e perda de ritmo',
  ];

  return (
    <section className=' py-20 lg:py-32 border-t border-b border-white/5'>
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-black text-white leading-tight mb-6'>
            A aprovação não vem da sorte.
          </h2>
          <p className='text-xl text-brand-primary font-bold uppercase tracking-wide mb-8'>
            Ela vem do método certo, foco no que a banca cobra e acompanhamento
            real.
          </p>
          <p className='text-lg md:text-xl text-brand-light/70'>
            O problema é que a maioria dos estudantes de medicina estuda errado:
          </p>
        </div>

        {/* Grid de Problemas */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16'>
          {problems.map((problem, index) => (
            <div
              key={index}
              className='flex items-center gap-4 bg-brand-dark/80 border border-white/5 p-6 rounded-2xl shadow-xl'
            >
              <XCircle className='text-[#B83E16]' size={28} />
              <p className='text-white font-medium text-lg'>{problem}</p>
            </div>
          ))}
        </div>

        {/* Conclusão e Transição */}
        <div className='max-w-2xl mx-auto text-center bg-brand-primary/10 border border-brand-primary/20 p-8 rounded-3xl backdrop-blur-md'>
          <div className='flex justify-center mb-4'>
            <CheckCircle2 className='text-brand-primary' size={40} />
          </div>
          <h3 className='text-2xl md:text-3xl font-black text-white mb-4'>
            A Precettore Med nasceu para resolver isso.
          </h3>
          <p className='text-brand-light/80 text-lg'>
            E agora você pode escolher o nível perfeito para a sua jornada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
