import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative px-6 py-12 md:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto max-w-[1280px]">
        {/* Main rounded container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-[#E2E8F0] px-8 py-12 md:px-16 md:py-16 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]">
          
          {/* Background Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(16,128,160,0.03)_0%,rgba(16,128,160,0)_70%)] blur-[50px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F1F6] px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#1080A0] mb-6">
                <Sparkles className="h-4 w-4" />
                Solo quedan 3 citas disponibles esta semana
              </div>
              <h2 className="text-[2rem] font-semibold leading-[1.2] tracking-tight text-[#0F172A] md:text-[2.5rem]">
                ¿Buscas recuperar tu vitalidad y equilibrio?
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
                Regula tu metabolismo y recupera tu energía con un plan personalizado y adaptado a tu rutina. Agenda hoy mismo tu consulta.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send?phone=573005979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta%20tiroidea."
                className="inline-flex h-[54px] min-w-[200px] items-center justify-center gap-2 rounded-full bg-[#1080A0] px-8 text-[15px] font-bold text-white shadow-[0_10px_15px_-3px_rgba(16,128,160,0.3)] transition-all hover:scale-[1.02] hover:bg-[#0D6E8A]"
              >
                Enviar WhatsApp
              </a>

              {/* Phone Button */}
              <a
                href="tel:+573009895852"
                className="inline-flex h-[54px] min-w-[200px] items-center justify-center gap-2 rounded-full bg-[#E1F1F6] px-8 text-[15px] font-bold text-[#1080A0] transition-all hover:scale-[1.02] hover:bg-[#D4EAF1]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
