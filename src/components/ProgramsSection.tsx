import React from 'react';

import { Check, ArrowRight, Sparkles, Flame, Crown } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  target: string;
  roma: string;
  btnText: string;
  link: string;
  popular?: boolean;
  valorMensal: string;
  valorAnual: string;
}

const ProgramsSection: React.FC = () => {
  const programs: Program[] = [
    {
      id: 'start',
      title: 'Precettore Start',
      subtitle: 'Para quem quer começar da forma certa',
      icon: <Sparkles className='text-blue-400' size={24} />,
      features: [
        '12 meses de acesso à Plataforma Precettore Med',
        'Banco de questões atualizado',
        'Flashcards inteligentes',
        'Revisões espaçadas',
        'Cronograma personalizado de acordo com a banca',
        'Plano anual de estudos',
      ],
      target:
        'Ideal para estudantes que ainda estão na faculdade ou querem começar com direção e constância.',
      roma: 'Estude com estratégia e construa uma base sólida estudando apenas o que cai.',
      btnText: 'Quero o Precettore Start',
      link: 'https://medeor.com.br/precettorecode/assinatura?canceled=1&provider=asaas',
      valorMensal: '99,90 ',
      valorAnual: '949,90',
    },
    {
      id: 'plus',
      title: 'Precettore Plus',
      subtitle: 'Sua evolução com acompanhamento real',
      icon: <Flame className='text-[#B83E16]' size={24} />,
      features: [
        'Tudo do Precettore Start +',
        '1 encontro semanal em grupo',
        '1 encontro individual mensal',
        'Plataforma com questões, videoaulas e materiais estratégicos',
      ],
      target:
        'Para quem não quer estudar sozinho e precisa de ritmo e supervisão.',
      roma: 'Acelere sua aprovação com orientação contínua, ajustes estratégicos mensais e evolução guiada.',
      btnText: 'Quero o Precettore Plus',
      link: 'https://medeor.com.br/precettorecode/checkout?offeringId=enc_ZzzsG1rV4PHqL2_jtcrRdZ2Pq96roMrS3WM6iOgAUWPhh-qQDPrDfP_YCPX_Wq4P',
      valorMensal: '358,90 ',
      valorAnual: '4306,80',
    },
    {
      id: 'elite',
      title: 'Precettore Elite',
      subtitle: 'O programa premium para quem quer aprovação rápida',
      icon: <Crown className='text-brand-primary' size={24} />,
      features: [
        'Tudo do PLUS +',
        '1 encontro individual extra para ajustes estratégicos',
        'Acesso exclusivo ao material do Estratégia MED',
      ],
      target:
        'Para quem está mais perto da prova, quer assertividade máxima e não pode perder tempo.',
      roma: 'Chegue no ENAMED/Revalida com confiança absoluta, domínio do conteúdo e estratégia vencedora.',
      btnText: 'Quero o Precettore Elite',
      link: 'https://medeor.com.br/precettorecode/checkout?offeringId=enc_NfLnzczRpU_4fDSOADVCPuxMg0w-YY2vBexELuVJ3IVfmAJuLxvjF_UpbUn4wGuk',
      popular: true,
      valorMensal: '689,90 ',
      valorAnual: '8.278,80',
    },
  ];

  return (
    <section
      id='programs-section'
      className='bg-brand-primary/8 py-20 lg:py-32 relative overflow-hidden'
    >
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 relative z-10'>
        {/* Cabeçalho da Seção */}
        <div className='text-center mb-16 lg:mb-24'>
          <span className='inline-block py-2 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 border border-brand-primary/20'>
            Escolha seu nível
          </span>
          <h2 className='text-4xl md:text-6xl font-black text-white leading-tight'>
            03 Programas <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
              Precettore Med
            </span>
            <div>para você</div>
          </h2>
        </div>

        {/* Grid dos Cards de Planos */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto'>
          {programs.map((program) => (
            <div
              key={program.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 background-blur-md ${
                program.popular
                  ? 'bg-brand-dark/90 border-2 border-brand-primary shadow-2xl shadow-brand-primary/10'
                  : 'bg-brand-dark/40 border border-white/10 shadow-xl'
              }`}
            >
              {/* Badge de Destaque para o plano Premium */}
              {program.popular && (
                <span className='absolute -top-4 right-6 bg-brand-primary text-brand-dark text-xs font-black uppercase tracking-widest py-1 px-3 rounded-full shadow-lg'>
                  Recomendado / Premium
                </span>
              )}

              {/* Informações Principais */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  {program.icon}
                  <h3 className='text-2xl font-black text-white'>
                    {program.title}
                  </h3>
                </div>
                <p className='text-brand-light/60 text-sm font-medium mb-6 min-h-10'>
                  {program.subtitle}
                </p>

                {/* Roma (A Promessa Principal do Plano) */}
                <div className='min-h-26 bg-white/5 border border-white/5 rounded-2xl p-4 mb-6'>
                  <p className='text-white font-bold text-sm leading-relaxed'>
                    {program.roma}
                  </p>
                </div>

                <hr className='border-white/10 mb-6' />

                {/* Entregáveis / Features */}
                <div className='space-y-3 mb-8'>
                  <p className='text-brand-primary font-black text-xs uppercase tracking-wider mb-2'>
                    Você recebe:
                  </p>
                  {program.features.map((feature, idx) => (
                    <div key={idx} className='flex items-start gap-3'>
                      <Check
                        className='text-brand-primary shrink-0 mt-0.5'
                        size={18}
                      />
                      <span className='text-brand-light/90 text-sm leading-relaxed'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card: Público Alvo e Botão CTA */}
              <div className='mt-auto pt-6 border-t border-white/5'>
                <div className='min-h-26 bg-white/5 border border-white/5 rounded-2xl p-4 mb-6'>
                  <p>Valor mensal</p>
                  <p>
                    <span className='text-brand-primary text-3xl font-bold'>
                      {program.valorMensal}
                    </span>{' '}
                    por mês
                  </p>
                  <p>Total do pacote: R$ {program.valorAnual} em 12 meses</p>
                </div>
                <p className='text-brand-light/50 text-xs italic mb-6 leading-relaxed'>
                  {program.target}
                </p>
                <a
                  href={program.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className={`group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-200 ${
                      program.popular
                        ? 'bg-brand-primary hover:bg-brand-primary/90 text-brand-dark shadow-xl shadow-brand-primary/20'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {program.btnText}
                    <ArrowRight
                      size={16}
                      className='group-hover:translate-x-1 transition-transform'
                    />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
