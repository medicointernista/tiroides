import React from 'react';
import Image from 'next/image';
import { Sparkles, PhoneCall } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F8F9FA]">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1080A0] opacity-10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6 py-12 md:py-16 lg:py-20 max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-col items-start animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <Sparkles className="h-4 w-4" />
              </span>
              Recupera tu vitalidad y equilibrio
            </div>

              {/* Main Headline - Primary H1 */}
                <h1 className="mt-6 text-balance text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-tight md:text-[3rem] lg:text-[3.75rem]">
                  Consulta Especializada en Desbalance de <span className="text-[#1080A0]">Tiroides</span> en Medellín
                </h1>

            {/* Value Proposition Description */}
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg">
              Diagnóstico profesional y plan personalizado para regular tu metabolismo y recuperar tu energía. Atención especializada en Medicina Interna.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=573011505174&text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20anuncio%20en%20Google.%20El%20Dr.%20Willmer%20Obregon%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
              >
                Contáctame vía WhatsApp
              </a>
              <a
                href="tel:+573011505174"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-base font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
              >
                <PhoneCall className="h-4 w-4" />
                Llama para una cita
              </a>
            </div>

            {/* Info Cards Grid */}
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 w-full">
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Atención</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Personalizada</dd>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Enfoque</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Integral</dd>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Ubicación</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Medellín</dd>
              </div>
            </dl>
          </div>

          {/* Right Image Column */}
          <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Background Glow behind image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative h-[450px] w-full md:h-[650px]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1df2619e-61e7-480c-b9fe-1a1ae30e00b0/desequilibrio-tiroideo-1769345470248.jpg?width=8000&height=8000&resize=contain"
                    alt="Consulta para desbalance de tiroides en Medellín - Dr. Willmer Obregón"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Caption Card */}
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/75 p-5 shadow-lg blur-none backdrop-blur-xl border border-white/20">
                  <p className="text-base font-semibold text-[#1E293B]">Control Metabólico</p>
                  <p className="mt-0.5 text-xs font-medium text-[#1080A0] uppercase tracking-wide">Salud de la Tiroides</p>
                </div>
              </figcaption>
            </figure>

            {/* Bottom Accent Glow */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
