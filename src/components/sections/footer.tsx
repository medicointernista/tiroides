"use client";

import React from 'react';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F8F9FA] pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Column 1: Doctor Bio */}
          <div className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-soft">
            <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-4">
              Dr. Willmer Obregón
            </h3>
            <p className="text-[0.9375rem] leading-[1.6] text-[#64748B] mb-8">
              Especialista en Medicina Interna con más de 15 años de experiencia. Enfocado en el diagnóstico y tratamiento integral del desequilibrio tiroideo para ayudarte a recuperar tu vitalidad.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/tu.internista.favorito/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#E1F1F6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.instagram.com/tu_internista_favorito/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#E1F1F6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@tuinternistafavorito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#E1F1F6] transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@tuinternistafavorito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] text-[#1080A0] hover:bg-[#E1F1F6] transition-colors"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.45-2.36c.09-.78.71-1.44 1.6-1.49v-3.66a6.62 6.62 0 0 0-5.44 10.46 6.59 6.59 0 0 0 5.63 2.85c3.54 0 6.43-2.89 6.43-6.47V9.5a8.19 8.19 0 0 0 5.85 2.35v-3.72a4.9 4.9 0 0 1-.34-.03z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-soft">
            <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-6">
              Información de contacto
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1080A0] mt-1 shrink-0" />
                <span className="text-[0.9375rem] text-[#64748B]">
                  Biencrecer, Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia, 050030
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1080A0] shrink-0" />
                <a href="tel:+573011505174" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                  +57 301 150 5174
                </a>
              </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1080A0] shrink-0" />
                  <a href="tel:+573009895852" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                    +57 300 989 5852
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1080A0] shrink-0" />
                  <a href="tel:+573053979628" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                    +57 305 3979628
                  </a>
                </li>
              </ul>
          </div>

          {/* Column 3: Schedule & Email */}
          <div className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-soft">
            <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-6">
              Correo y horarios
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1080A0] shrink-0" />
                <a href="mailto:consulta@internistamedellin.com" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  consulta@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1080A0] shrink-0" />
                <a href="mailto:asistente@internistamedellin.com" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  asistente@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1080A0] shrink-0" />
                <a href="mailto:estudios@internistamedellin.com" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  estudios@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1080A0] shrink-0" />
                <a href="mailto:procedimientos@internistamedellin.com" className="text-[0.9375rem] text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  procedimientos@internistamedellin.com
                </a>
              </li>
            </ul>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#1080A0]" />
                <span className="text-[0.75rem] font-bold text-[#1E293B] uppercase tracking-wider">
                  Horario de Atención
                </span>
              </div>
              <div className="text-[0.875rem] text-[#64748B] leading-relaxed">
                <p>Lunes a viernes: 8:00 am - 5:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-[#E2E8F0] mb-8" />

        {/* Bottom Signature Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <p className="text-[0.875rem] text-[#64748B] order-3 md:order-1">
            {currentYear} <a href="https://localrank.com.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors font-medium">LocalRank</a>. Todos los derechos reservados.
          </p>
          
          <div className="order-1 md:order-2">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df2619e-61e7-480c-b9fe-1a1ae30e00b0-3000-aa7df6c6-2a51-4cd0-bfdd-494edb37f549-orchids-cloud/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1-1.png"
                alt="Logo Dr. Willmer Obregón - Internista en Medellín"
                width={180}
                height={50}
              className="h-10 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748B] hover:text-[#1080A0] transition-colors order-2 md:order-3"
          >
            Volver arriba
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
