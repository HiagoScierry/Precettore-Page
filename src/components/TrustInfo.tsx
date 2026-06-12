import React from 'react';
import { MessageCircle, Mail, CreditCard, QrCode, Barcode } from 'lucide-react';

const TrustInfo: React.FC = () => {
  return (
    <div className='max-w-360 mx-auto px-4 py-6 md:px-10 lg:px-18 border-t border-white/5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Coluna 1: Fale Conosco */}
        <div className='flex flex-col gap-6'>
          <p className='font-black uppercase text-white tracking-widest text-sm'>
            Fale Conosco
          </p>

          <div className='space-y-2'>
            <div className='text-white/60 hover:text-brand-primary transition-colors cursor-pointer'>
              <a
                href='https://www.instagram.com/precettore.med/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-5 h-5 '
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
                <span className='text-sm font-medium whitespace-nowrap'>
                  @precettore.med
                </span>
              </a>
            </div>
            <div className='flex items-center gap-3 text-white/60 hover:text-brand-primary transition-colors cursor-pointer'>
              <Mail size={18} />
              <span className='text-sm font-medium'>
                precettore.med@gmail.com
              </span>
            </div>
            <a
              href='https://wa.me/5527997627631?'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center gap-3 text-white/60 hover:text-brand-primary transition-colors cursor-pointer'>
                <MessageCircle size={18} />
                <span className='text-sm font-medium'>
                  WhatsApp: (27) 99762-7631
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Coluna 2: Pagamento */}
        <div className='flex flex-col gap-6'>
          <p className='font-black uppercase text-white tracking-widest text-sm'>
            Pagamento
          </p>

          <div className='flex flex-wrap gap-4 items-center'>
            <div className='flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/10 text-white/40'>
              <CreditCard size={20} />
              <span className='text-[10px] font-bold uppercase'>Cartão</span>
            </div>
            <div className='flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/10 text-white/40'>
              <QrCode size={20} />
              <span className='text-[10px] font-bold uppercase'>PIX</span>
            </div>
          </div>

          <p className='text-sm text-white/50 leading-relaxed max-w-xs'>
            Pagamentos seguros processados com criptografia de ponta. Aceitamos
            as principais bandeiras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustInfo;
