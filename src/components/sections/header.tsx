import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative w-full z-50">
      {/* Top Banner Bar */}
      <div className="bg-[#1080A0] text-[#F8FAFC]">
        <div className="container mx-auto px-6 py-2 max-w-[1400px]">
          <div className="text-center">
            <span className="text-[14px] font-semibold tracking-wide uppercase">
              Consulta Especializada en Desequilibrio Tiroideo - Medellín
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <a 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]" 
              aria-label="Ir al inicio" 
              href="/"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df2619e-61e7-480c-b9fe-1a1ae30e00b0-3000-aa7df6c6-2a51-4cd0-bfdd-494edb37f549-orchids-cloud/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1-1.png" 
                alt="Logo del Dr. Willmer Obregón" 
                width={205}
                height={64}
                className="h-14 md:h-16 w-auto object-contain"
                priority
              />
            </a>

            {/* CTA Section */}
            <div className="flex items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=573011505174&text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20anuncio%20en%20Google.%20El%20Dr.%20Willmer%20Obregon%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="items-center justify-center gap-2 whitespace-nowrap rounded-[24px] text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-lg hover:shadow-[#1080A0]/30 hover:scale-[1.02] h-[48px] px-6 py-2"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
