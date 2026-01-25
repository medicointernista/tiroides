"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿La consulta incluye exámenes?",
    answer: "No siempre; tras la valoración inicial se indican los exámenes necesarios (laboratorio, ecografía tiroidea, PAAF) según tu caso específico.",
  },
  {
    question: "¿Atienden urgencias tiroideas?",
    answer: "Sí; en casos graves o síntomas agudos, debes contactarnos inmediatamente por teléfono o WhatsApp para brindarte atención prioritaria.",
  },
  {
    question: "¿Brindan atención para embarazadas o planificación?",
    answer: "Sí, realizamos un seguimiento exhaustivo y ajustes de dosis específicos para asegurar el bienestar tanto de la madre como del bebé durante el embarazo o su planificación.",
  },
  {
    question: "¿Cuál es el enfoque del tratamiento?",
    answer: "Nuestro enfoque es integral: combinamos medicación precisa con recomendaciones dietéticas y medidas prácticas adaptadas a tu rutina diaria para regular tu metabolismo.",
  },
];

const FAQAccordionItem = ({ 
  item, 
  isOpen, 
  onClick 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={cn(
        "mb-4 overflow-hidden rounded-[1.5rem] border transition-all duration-300",
        isOpen 
          ? "border-[#1080A0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]" 
          : "border-[#E2E8F0] bg-white"
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
      >
        <span className={cn(
          "text-[16px] font-semibold tracking-tight transition-colors duration-300",
          isOpen ? "text-[#1080A0]" : "text-[#0F172A]"
        )}>
          {item.question}
        </span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-[#1080A0] transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[15px] leading-relaxed text-[#64748B]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8F9FA] py-16 md:py-24">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1080A0]/10 bg-[#E1F1F6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-[#1080A0]">
              <HelpCircle className="h-4 w-4" />
              Resolviendo tus dudas
            </div>
            
            <h2 className="mt-6 text-[2rem] font-semibold leading-tight tracking-tight text-[#0F172A] md:text-[2.25rem]">
              Preguntas Frecuentes
            </h2>
            
            <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-[#64748B]">
              Encuentra respuestas a las preguntas más comunes sobre la consulta y los servicios médicos del Dr. Willmer Obregón para el desequilibrio tiroideo.
            </p>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {faqData.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
