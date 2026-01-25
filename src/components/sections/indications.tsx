import React from 'react';

const IndicationsSection = () => {
  const indicationsList = [
    "Hipotiroidismo e hipertiroidismo",
    "Tiroiditis, incluida Hashimoto",
    "Nódulos tiroideos y bocio",
    "Seguimiento postoperatorio y complicaciones",
    "Atención a embarazadas y planificación"
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Main Card Container */}
        <div className="overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white p-8 md:p-12 lg:p-16 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            
            {/* Left Column: List */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
                  Problemas Tiroideos Atendidos
                </h2>
                <p className="mt-6 text-[1rem] leading-[1.6] text-[#64748B] max-w-lg">
                  Brindamos atención especializada para una amplia gama de condiciones relacionadas con la glándula tiroides, asegurando un control óptimo en cada etapa:
                </p>
              </div>

              <ul className="space-y-4">
                {indicationsList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#1080A0]" />
                    <span className="text-[1rem] font-medium leading-[1.5] text-[#1E293B]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Blockquote */}
            <div className="relative h-full">
              <div className="flex h-full flex-col justify-center rounded-[1.5rem] bg-[#F1F5F9]/50 p-8 md:p-10 lg:p-12 border border-[#E2E8F0]/60">
                <blockquote className="relative">
                  <p className="italic text-[1.125rem] leading-[1.6] text-[#64748B] text-center md:text-[1.25rem]">
                    &ldquo;Nuestro enfoque integral permite ajustar el tratamiento a tus necesidades específicas, garantizando bienestar físico y emocional.&rdquo;
                  </p>
                </blockquote>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#1080A0]/5 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#E1F1F6]/40 blur-3xl" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicationsSection;
