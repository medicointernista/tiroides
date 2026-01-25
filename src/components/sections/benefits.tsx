import React from 'react';
import { Zap, Activity, HeartPulse, Layers, Scissors, ShieldAlert, Sparkles, Scale, Search, Apple, Stethoscope } from 'lucide-react';

const benefitsData = [
  {
    icon: <Zap className="w-6 h-6" />,
    text: "Más energía y reducción de fatiga crónica."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    text: "Regulación del metabolismo para controlar síntomas como cambios de peso y fatiga."
  },
  {
    icon: <Search className="w-6 h-6" />,
    text: "Diagnóstico preciso para un tratamiento efectivo."
  },
  {
    icon: <Apple className="w-6 h-6" />,
    text: "Alimentación funcional sencilla, sin dietas extremas."
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    text: "Prevención y control para evitar riesgos a largo plazo."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    text: "Manejo del impacto del estrés en tu salud hormonal."
  }
];

const Benefits = () => {
  return (
    <section 
      id="beneficios" 
      className="relative bg-white py-12 md:py-20 overflow-hidden"
    >
      {/* Subtle Glow Effect - top right */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-[#E1F1F6] rounded-full blur-3xl opacity-40 pointer-events-none" 
      />
      
      {/* Alternate Glow Effect - bottom left */}
      <div 
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none" 
      />

      <div className="container relative mx-auto px-6 max-w-[1280px]">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Beneficios del Tratamiento
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Recupera tu equilibrio hormonal y mejora tu calidad de vida con un enfoque integral y personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-deep items-center"
            >
              <div 
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white group-hover:border-[#1080A0] transition-all duration-300"
              >
                {React.cloneElement(benefit.icon as React.ReactElement, { 
                  className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                })}
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-[#1E293B] mt-0.5">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
