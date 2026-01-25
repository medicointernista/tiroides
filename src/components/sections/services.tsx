import React from 'react';
import Image from 'next/image';

const services = [
    {
      title: "Evaluación Integral",
      description: "Historia clínica completa y examen físico detallado para identificar la causa exacta del desbalance tiroideo.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1df2619e-61e7-480c-b9fe-1a1ae30e00b0/tiroides-Evaluacion-Integral-1769346123480.jpg?width=8000&height=8000&resize=contain",
      alt: "Evaluación médica tiroides Medellín - Dr. Willmer Obregón"
    },
    {
      title: "Plan Personalizado",
      description: "Tratamiento con medicación, recomendaciones dietéticas y medidas prácticas adaptadas a tu rutina diaria.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1df2619e-61e7-480c-b9fe-1a1ae30e00b0/Plan-Personalizado-tiroides-1769346032145.jpg?width=8000&height=8000&resize=contain",
      alt: "Plan de tratamiento tiroides personalizado Medellín"
    },
    {
      title: "Seguimiento Continuo",
      description: "Monitoreo periódico con ajustes necesarios para asegurar tu mejora continua y bienestar a largo plazo.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1df2619e-61e7-480c-b9fe-1a1ae30e00b0/Seguimiento-Continuo-tiroides-1769345971539.jpg?width=8000&height=8000&resize=contain",
      alt: "Seguimiento médico desbalance tiroideo Medellín"
    }
];

const ServicesSection = () => {
  return (
    <section id="tratamiento" className="relative bg-[#F8F9FA] py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
            Atención Especializada en Medicina Interna y Tiroides
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B]">
            Ofrecemos un enfoque integral para regular tu metabolismo y recuperar tu energía. Además del diagnóstico tiroideo, contamos con servicios especializados de apoyo diagnóstico.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white/60 backdrop-blur-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]"
            >
              <figure className="relative h-44 w-full md:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/10 via-transparent to-transparent"></div>
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.125rem] font-semibold tracking-tight text-[#0F172A] leading-[1.4] transition-colors group-hover:text-[#1080A0]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Section */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-8 md:p-12 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[1.25rem] font-semibold text-[#0F172A] mb-6">Servicios de Apoyo Diagnóstico</h3>
              <p className="text-[#64748B] mb-6 text-sm">
                Complementamos tu consulta con tecnología avanzada para un diagnóstico más preciso:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {['Holter 24 horas', 'Infiltración', 'Electrocardiograma', 'Mapa 24 horas'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-[#1E293B]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1080A0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1080A0]/10 to-[#E1F1F6]/20 blur-lg"></div>
              <div className="relative rounded-2xl bg-[#F1F5F9]/50 p-6 md:p-8 border border-white/50 backdrop-blur-sm">
                <p className="italic text-[1.125rem] text-[#1E293B] text-center leading-relaxed font-medium">
                  &quot;Un diagnóstico preciso es el primer paso para recuperar tu vitalidad y equilibrio metabólico.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
