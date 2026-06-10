import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import autoridade from '../assets/autoridade.webp';

const QuemSomos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='min-h-screen bg-brand-dark flex flex-col'>
      <Header />
      <main className='grow'>
        <section className='bg-[#0A1622] text-white py-20 px-6 md:px-12 lg:px-24 font-sans'>
          <div className='max-w-6xl mx-auto'>
            {/* CABEÇALHO DA SEÇÃO */}
            <div className='text-center mb-16'>
              <div className='w-24 h-1 bg-[#C5A47E] mx-auto mb-6'></div>
              <h2 className='text-4xl md:text-5xl font-bold tracking-wide font-serif text-[#C5A47E]'>
                DR. CARLOS AUGUSTO
              </h2>
              <p className='text-lg md:text-xl text-slate-400 mt-4 tracking-widest uppercase'>
                Fundador e Mentor Principal
              </p>
            </div>

            {/* BLOCO PRINCIPAL: BIOGRAFIA & FOTO */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20'>
              {/* Foto com Frame Premium */}
              <div className='lg:col-span-5 flex justify-center'>
                <div className='relative p-3 border-2 border-[#C5A47E] rounded-full max-w-sm w-full aspect-square overflow-hidden bg-[#0D1E30]'>
                  <img
                    src={autoridade}
                    alt='Dr. Carlos Augusto'
                    className='w-full h-full object-cover object-top rounded-full filter grayscale hover:grayscale-0 transition duration-500'
                  />
                </div>
              </div>

              {/* Texto Biográfico */}
              <div className='lg:col-span-7 space-y-6 text-slate-300 text-lg leading-relaxed'>
                <p>
                  Natural de Belo Horizonte/MG e formado pela{' '}
                  <strong className='text-[#C5A47E]'>
                    Faculdade de Medicina de Barbacena/MG
                  </strong>
                  , o Dr. Carlos Augusto cursou sua residência médica no{' '}
                  <strong className='text-white'>HC-UFMG</strong>, um dos
                  centros de saúde mais respeitados e concorridos do país.
                </p>
                <p>
                  Possui Título de Especialista em Clínica Médica pela SBCM e um
                  histórico sólido e consistente de aprovações em concursos
                  públicos e residências médicas. Atualmente, atua como médico
                  Horizontal da{' '}
                  <strong className='text-white'>
                    Unidade de Terapia Intensiva (UTI)
                  </strong>{' '}
                  do Hospital Estadual Roberto Arnizaut Silvares.
                </p>
                <p>
                  Sua paixão pela docência e pela evolução acadêmica de seus
                  alunos o levou a se tornar professor universitário na cadeira
                  de Clínica Médica. Além disso, expande suas fronteiras
                  científicas estando em pleno desenvolvimento de seu{' '}
                  <strong className='text-[#C5A47E]'>
                    Doutorado em Saúde Pública pela USP
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* RECONHECIMENTO LITERÁRIO & MERCADO */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
              <div className='bg-white/5 p-8 rounded-2xl border border-[#C5A47E]/20 hover:border-[#C5A47E]/50 transition duration-300'>
                <div className='text-[#C5A47E] text-3xl mb-4'>
                  <i className='fas fa-book-open'></i>
                </div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  Referência Literária
                </h3>
                <p className='text-slate-400'>
                  Autor do livro{' '}
                  <strong className='text-white'>
                    "Reta Final: Questões Comentadas para o Título de
                    Especialista em Clínica Médica"
                  </strong>
                  , publicado pela{' '}
                  <strong className='text-[#C5A47E]'>Editora Manole</strong>, a
                  maior e mais prestigiada editora médica do Brasil.
                </p>
              </div>

              <div className='bg-white/5 p-8 rounded-2xl border border-[#C5A47E]/20 hover:border-[#C5A47E]/50 transition duration-300'>
                <div className='text-[#C5A47E] text-3xl mb-4'>
                  <i className='fas fa-graduation-cap'></i>
                </div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  Coordenação Pedagógica
                </h3>
                <p className='text-slate-400'>
                  Coordenador oficial dos Cursos Preparatórios para o Título de
                  Especialista em Clínica Médica da Editora Manole e do aclamado{' '}
                  <strong className='text-white'>Curso Manole Revalida</strong>,
                  direcionado a médicos revalidandos.
                </p>
              </div>
            </div>

            {/* PROPÓSITO & MÉTODO */}
            <div className='bg-gradient-to-r from-[#0D1E30] to-[#122A42] p-8 md:p-12 rounded-3xl border border-[#C5A47E]/30 text-center relative overflow-hidden'>
              <div className='absolute top-0 right-0 p-4 opacity-5 text-9xl text-white pointer-events-none'>
                <i className='fas fa-quote-right'></i>
              </div>

              <h3 className='text-2xl font-bold text-[#C5A47E] mb-6'>
                Fundação da Precettore
              </h3>
              <p className='text-xl italic max-w-4xl mx-auto text-slate-200 leading-relaxed'>
                "A Precettore nasceu para preencher a lacuna que o mercado
                tradicional ignora. Entendemos que mesmo com o melhor material
                do mundo, o aluno falhará se não dominar os{' '}
                <strong>
                  três pilares essenciais: cronograma inteligente personalizado,
                  disciplina estratégica e acompanhamento real
                </strong>
                . Nosso objetivo é decodificar o padrão das bancas e transformar
                suas horas de estudo em aprovação acelerada."
              </p>

              <p className='mt-6 text-[#C5A47E] font-semibold tracking-wider uppercase text-sm'>
                — Dr. Carlos Augusto Figueiredo Correia
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;
