import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='py-12 border-t border-brand-secondary/10 text-center'>
      <div className='max-w-360 mx-auto px-4 md:px-10 lg:px-18 flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='flex flex-col items-start'>
          <p className='text-brand-secondary text-xs'>
            © 2026 Precettore Aprova. Todos os direitos reservados.
          </p>
          <p className='text-brand-secondary text-xs'>
            Desenvolvido por HM Marketing Digital
          </p>
        </div>
        <div className='flex gap-6'>
          <a href='#' className='text-brand-secondary hover:text-white text-xs'>
            Termos de Uso
          </a>
          <a href='#' className='text-brand-secondary hover:text-white text-xs'>
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
