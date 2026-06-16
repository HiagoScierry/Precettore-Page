import React from 'react';
import { Quote } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  return (
    <section className='py-20 lg:py-28 relative overflow-hidden bg-brand-dark/40 border-b border-white/5'>
      {/* Luz de fundo centralizada para dar profundidade ao texto */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 relative z-10'>
        <div className='max-w-4xl mx-auto text-center bg-brand-dark/60 border border-white/5 p-10 md:p-16 rounded-3xl shadow-2xl backdrop-blur-md'>
          {/* Ícone de Aspas Centralizado */}
          <div className='flex justify-center text-brand-primary mb-8 opacity-40'>
            <Quote size={52} height='fill' />
          </div>

          {/* Frase de Impacto Principal */}
          <blockquote className='text-2xl md:text-4xl font-black text-white leading-snug tracking-wide mb-8'>
            “Você não precisa estudar tudo. Precisa estudar{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-secondary'>
              só o que a banca cobra
            </span>{' '}
            — da forma certa — na ordem certa.”
          </blockquote>

          {/* Fechamento da Ideia */}
          <p className='text-lg md:text-xl text-brand-light/70 max-w-2xl mx-auto mb-10 leading-relaxed'>
            É isso que fazemos na Precettore Med. Toda a complexidade do edital
            resumida em uma estratégia direta de execução.
          </p>

          {/* Linha Divisória Sutil */}
          <div className='w-16 h-0.5 bg-brand-primary/30 mx-auto mb-6'></div>

          {/* Assinatura do Mentor */}
          <div>
            <p className='text-brand-primary font-black text-xl uppercase tracking-wider mb-1'>
              Dr. Carlos Augusto F. Correia
            </p>
            <div className='text-white/40 text-xs uppercase font-bold tracking-widest space-y-1'>
              <p>Médico Especialista em Clínica Médica</p>
              <p>CRM/ES: 10099 — RQE: 12675</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
