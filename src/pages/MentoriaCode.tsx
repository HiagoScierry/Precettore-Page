import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';
import TrustInfo from '../components/TrustInfo';
import {
  BookOpen,
  Database,
  MessagesSquare,
  Calendar,
  CheckCircle,
} from 'lucide-react';

const MentoriaPosEdital: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const preEditalPlans = [
    {
      name: 'Assinatura Anual',
      subtitle: 'Acesso Exclusivo à Plataforma Inteligente (Sem Mentoria)',
      access: '12 meses de acesso à plataforma',
      mentorship:
        'Estudo 100% autônomo e independente (Não inclui mentor individual/grupo)',
      artificialIntelligence:
        'Planejamento automático, cronômetro de horas e estatísticas em tempo real',
      installments: '12x',
      value: '39,90',
      total: '299,90 à vista no PIX',
      highlight: false,
      menssage: `Olá! Tenho interesse na Assinatura Anual da plataforma Precettore CODE. Gostaria de garantir meu acesso pelo valor de 12x R$ 39,90 ou R$ 299,90 à vista.`,
    },
    {
      name: 'Ciclo Básico',
      subtitle: 'Público-alvo: Estudantes de Medicina',
      access: '12 meses de acesso',
      mentorship: '1 encontro semanal em grupo + 1 encontro mensal individual',
      artificialIntelligence:
        'Plataforma com 200 mil questões, 5 mil videoaulas e 2 mil materiais',
      installments: '12x',
      value: '109,90',
      total: '799,90 à vista no PIX',
      highlight: false,
      menssage: `Olá! Tenho interesse em entrar na Mentoria Precettore CODE - Ciclo Básico. Gostaria de saber mais sobre o plano de 12x R$ 109,90 ou R$ 799,90 à vista.`,
    },
    {
      name: 'Revalida',
      subtitle:
        'Público-alvo: Estudantes do último ano e Médicos em Revalidação',
      access: '6 meses de acesso',
      mentorship: '1 encontro semanal em grupo + 1 encontro mensal individual',
      artificialIntelligence:
        'Cronograma focado no edital INEP Revalida + Banco com 200 mil questões',
      installments: '6x',
      value: '189,90',
      total: '899,90 à vista no PIX',
      highlight: false,
      menssage: `Olá! Tenho interesse em entrar na Mentoria Precettore CODE - Revalida. Gostaria de iniciar minha preparação focada no INEP.`,
    },
    {
      name: 'ENAMED / Residências',
      subtitle: 'Público-alvo: Estudantes do último ano e Médicos',
      access: '12 meses de acesso',
      mentorship:
        '1 encontro mensal individual com o mentor para ajuste de metas',
      artificialIntelligence:
        'Acesso completo ao Curso Extensivo do Estratégia MED Residência e ENAMED',
      installments: '12x',
      value: '659,90',
      total: '5.999,90 à vista no PIX',
      highlight: true,
      menssage: `Olá! Tenho interesse em entrar no Curso Extensivo + Mentoria Precettore CODE - ENAMED/Residências.`,
    },
  ];

  return (
    <div className='min-h-screen bg-brand-dark flex flex-col text-white'>
      <Header />

      <main className='grow'>
        {/* HERO DA PÁGINA INTERNA */}
        <section className='pt-32 pb-16 bg-linear-to-b from-brand-primary/5 to-transparent'>
          <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
            <div className='max-w-4xl'>
              <span className='text-brand-primary font-black uppercase tracking-[0.3em] text-sm'>
                Plataforma Inteligente de Estudos Personalizados
              </span>

              <h1 className='text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 mb-8 uppercase'>
                Precettore{' '}
                <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-cyan-400'>
                  Code
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-brand-primary font-bold leading-snug max-w-3xl mb-6 italic'>
                "Apoiando o estudante de medicina que está no exterior do ciclo
                básico ao revalida, venha ser nosso mentorado(a) e se somar a
                centenas de histórias de sucesso!"
              </p>

              <p className='text-lg md:text-xl text-brand-light/70 leading-relaxed max-w-3xl font-medium '>
                Pare de adaptar sua vida aos estudos. Faça seus estudos se
                adaptarem à sua vida. A plataforma{' '}
                <span className='text-white/90'>Precettore CODE</span> foi
                desenhada para centralizar e otimizar toda a sua preparação
                médica — do ciclo básico às provas de Residência, Revalida e
                Concursos.
              </p>

              <br />

              <p className='text-lg md:text-xl text-brand-light/70 leading-relaxed max-w-3xl'>
                Através de uma metodologia de altíssima intensidade, você terá
                acesso a um ciclo completo de cronogramas automatizados e
                revisões estratégicas. Escolha entre o{' '}
                <span className='text-white/90'>
                  Plano Anual Exclusivo da Plataforma
                </span>{' '}
                para guiar sua jornada de forma independente, ou impulsione sua
                performance adicionando o{' '}
                <span className='text-white/90'>
                  Acompanhamento Personalizado
                </span>{' '}
                de um mentor VIP.
              </p>

              <div className='mt-6 flex flex-wrap gap-4 text-xs md:text-sm font-bold uppercase tracking-wider text-brand-primary/80'></div>
            </div>
          </div>
        </section>
        {/* SEÇÃO DE ENTREGA (Os 3 Pilares Tecnológicos do Espelho) */}
        <section className='py-24 border-white/5'>
          <div className='max-w-360 mx-auto px-6 md:px-12 lg:px-20'>
            <div className='grid md:grid-cols-2 gap-12 mx-auto'>
              {/* Card 1: Planejamento */}
              <div className='flex flex-col gap-4 group'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300'>
                  <BookOpen size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase tracking-wide'>
                  Planner Individualizado
                </h4>
                <p className='text-brand-light/60 text-sm leading-relaxed'>
                  Metas diárias e semanais contendo tarefas teóricas
                  direcionadas, revisões finais e resumos estratégicos em texto
                  e vídeo de especialidades médicas.
                </p>
              </div>

              {/* Card 2: Ecossistema de Suporte */}
              <div className='flex flex-col gap-4 group'>
                <div className='w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300'>
                  <MessagesSquare size={24} />
                </div>
                <h4 className='text-xl font-black text-white uppercase tracking-wide'>
                  Suporte VIP & Mentoria
                </h4>
                <p className='text-brand-light/60 text-sm leading-relaxed'>
                  Contato diário individualizado com seu mentor via WhatsApp
                  para ajuste de rotina, além de salas VIP ao vivo para controle
                  de performance e inteligência emocional.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FECHAMENTO DE CONVERSÃO */}
        <PricingPlans plans={preEditalPlans} />;
        {/* SEÇÃO FALE CONOSCO (TRUST INFO) */}
        <TrustInfo />
      </main>

      <Footer />
    </div>
  );
};

export default MentoriaPosEdital;
