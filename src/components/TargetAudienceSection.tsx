import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';

interface TargetItem {
  id: number;
  text: string;
}

const TargetAudienceSection: React.FC = () => {
  const targets: TargetItem[] = [
    { id: 1, text: 'Estudantes de medicina' },
    { id: 2, text: 'Formados fora do Brasil' },
    { id: 3, text: 'Quem estuda sozinho e perde tempo' },
    { id: 4, text: 'Quem sente que não dá conta do volume de conteúdo' },
    { id: 5, text: 'Quem precisa de estratégia direcionada ao INEP' },
  ];

  return (
    <section className='py-20 lg:py-32 relative overflow-hidden border-b border-white/5'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 relative z-10'>
        {/* Cabeçalho da Seção */}
        <div className='text-center max-w-3xl mx-auto mb-16 lg:mb-24'>
          <span className='inline-block py-2 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 border border-brand-primary/20'>
            Direcionamento
          </span>
          <h2 className='text-3xl md:text-5xl font-black text-white leading-tight mb-6'>
            Para quem é o método <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
              Precettore Med?
            </span>
          </h2>
          <p className='text-brand-light/60 text-lg'>
            Se você se encaixa em um ou mais desses perfis, este programa foi
            desenhado para a sua aprovação.
          </p>
        </div>

        {/* Grid dos Perfis */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {targets.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 bg-brand-dark/40 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-brand-primary/30 hover:-translate-y-1 ${
                item.id === 5 ? 'lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className=' text-brand-primary'>
                <CheckCircle2 size={32} />
              </div>
              <p className='text-white font-bold text-lg leading-snug pt-1'>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Rodapé motivacional da seção */}
        <div className='mt-16 text-center flex items-center justify-center gap-2 text-brand-light/40 text-sm uppercase tracking-widest font-bold'>
          <UserCheck size={18} className='text-brand-primary' />
          <span>Foco total na sua transformação</span>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
