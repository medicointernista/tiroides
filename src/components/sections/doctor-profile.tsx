import React from 'react';
import { 
  CheckCircle2, 
  Stethoscope, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Clock,
  ArrowUpRight,
  Heart
} from 'lucide-react';

const DoctorProfile = () => {
  const experiences = [
    "Medicina Interna",
    "Desequilibrio Tiroideo",
    "Hipotiroidismo e Hipertiroidismo",
    "Tiroiditis de Hashimoto",
    "Nódulos y Bocio",
    "Diabetes e Hipertensión",
    "Control de Metabolismo",
    "Prevención de Riesgos",
    "Enfermedades Crónicas"
  ];

  const focusCards = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Atención personalizada",
      description: "Trato humano y empático adaptado a tus necesidades."
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Seguimiento WhatsApp",
      description: "Acompañamiento continuo para tus dudas y ajustes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compromiso Ético",
      description: "Diagnósticos precisos con tecnología avanzada."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Enfoque Integral",
      description: "Consideramos aspectos físicos y emocionales."
    }
  ];

  const expectationSteps = [
    { number: 1, text: "Historia clínica completa y examen físico." },
    { number: 2, text: "Identificación de la causa del desbalance." },
    { number: 3, text: "Plan personalizado: medicación y dieta." },
    { number: 4, text: "Medidas prácticas adaptadas a tu rutina." },
    { number: 5, text: "Seguimiento periódico con ajustes continuos." }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Doctor Profile Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E2E8F0] shadow-soft">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#1080A0] bg-[#E1F1F6] px-3 py-1 rounded-full">
                  Conoce al Especialista
                </span>
              </div>
              
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold text-[#0F172A] leading-tight">
                Dr. Willmer Obregón: experiencia y ética
              </h2>
              
              <p className="text-[#64748B] text-base leading-relaxed">
                Médico con más de 15 años de trayectoria, especializado en el diagnóstico y tratamiento integral de desequilibrios tiroideos. Mi enfoque combina la precisión diagnóstica con una atención empática y cercana.
              </p>

              <div className="space-y-4">
                <h3 className="text-[0.875rem] font-bold text-[#0F172A] uppercase tracking-wider">
                  Especialidades y Enfoque:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experiences.map((exp, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-[13px] text-[#1E293B] hover:border-[#1080A0] transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1080A0]" />
                      {exp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 mt-8 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E1F1F6] flex items-center justify-center text-[#1080A0]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[1.125rem] font-bold text-[#0F172A]">15+ años</div>
                    <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider">de experiencia</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E1F1F6] flex items-center justify-center text-[#1080A0]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[1.125rem] font-bold text-[#0F172A]">Avanzada</div>
                    <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider leading-none">Tecnología diagnóstica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Integral Focus & Steps */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-[2.25rem] font-semibold text-[#0F172A] mb-4">Ventajas de elegirnos</h2>
              <p className="text-[#64748B] text-base max-w-lg">
                Ofrecemos un diagnóstico preciso y un plan de vida saludable que trasciende la simple medicación, enfocándonos en tu bienestar total.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {focusCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#1080A0]/30 hover:shadow-deep transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8F9FA] text-[#1080A0] flex items-center justify-center mb-4 group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Consulta List */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-soft">
              <h4 className="text-[1.125rem] font-semibold text-[#0F172A] mb-6 flex items-center gap-2">
                Evaluación y Tratamiento
              </h4>
              <div className="space-y-4">
                {expectationSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1080A0] text-white flex items-center justify-center text-[13px] font-bold">
                      {step.number}
                    </span>
                    <p className="text-[15px] text-[#1E293B] font-medium">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
