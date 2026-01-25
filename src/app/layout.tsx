import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Desbalance de Tiroides | Dr. Willmer Obregón Medellín",
    description: "Consulta especializada para el desbalance de tiroides con el Dr. Willmer Obregón en Medellín. Mejora tu salud metabólica y hormonal. Agenda tu cita hoy.",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return (
        <html lang="es" suppressHydrationWarning>
        <body className="antialiased">
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
