import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Desbalance de Tiroides | Dr. Willmer Obregón Medellín",
    description: "Consulta especializada para el desbalance de tiroides con el Dr. Willmer Obregón en Medellín. Mejora tu salud metabólica y hormonal. Agenda tu cita hoy.",
    robots: "index, follow",
    icons: {
      icon: "/Favicon_willmer_obregon.png",
      apple: "/apple-icon.png",
    },
  };

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return (
        <html lang="es" suppressHydrationWarning>
        <head>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`,
            }}
          />
          <Script
            id="schema-doctor"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Dr. Willmer Obregón - Medicina Interna y Tiroides",
                "description": "Consulta especializada en desbalance de tiroides, hipotiroidismo, hipertiroidismo y medicina interna en Medellín",
                "url": "https://internistamedellin.com",
                "telephone": ["+573011505174", "+573009895852", "+573053979628"],
                "email": "consulta@internistamedellin.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Medellín",
                  "addressRegion": "Antioquia",
                  "addressCountry": "CO"
                },
                "medicalSpecialty": ["Medicina Interna", "Endocrinología"],
                "founder": {
                  "@type": "Person",
                  "name": "Dr. Willmer Obregón"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Medellín"
                }
              })
            }}
          />
          <Script
            id="schema-faq"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿La consulta incluye exámenes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No siempre; tras la valoración inicial se indican los exámenes necesarios (laboratorio, ecografía tiroidea, PAAF) según tu caso específico."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Atienden urgencias tiroideas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí; en casos graves o síntomas agudos, debes contactarnos inmediatamente por teléfono o WhatsApp para brindarte atención prioritaria."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Brindan atención para embarazadas o planificación?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, realizamos un seguimiento exhaustivo y ajustes de dosis específicos para asegurar el bienestar tanto de la madre como del bebé durante el embarazo o su planificación."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuál es el enfoque del tratamiento?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nuestro enfoque es integral: combinamos medicación precisa con recomendaciones dietéticas y medidas prácticas adaptadas a tu rutina diaria para regular tu metabolismo."
                    }
                  }
                ]
              })
            }}
          />
        </head>
        <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="1df2619e-61e7-480c-b9fe-1a1ae30e00b0"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
