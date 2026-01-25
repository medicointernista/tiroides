## Project Summary
A professional, clinical landing page for Dr. Willmer Obregón, focusing on thyroid imbalance consultations in Medellín. The site uses a "Medical-Tech" aesthetic with a primary palette of deep teals and soft blues, designed to build trust and provide clear treatment information for metabolic and hormonal health.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4
- Icons: Lucide React
- Animations: tw-animate-css (Tailwind CSS Animate)
- Components: Custom React components with "use client" for interactivity where needed (FAQ, Footer).

## Architecture
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/sections/`: Modular page sections (Header, Hero, Benefits, Services, etc.).
- `src/lib/`: Utility functions (e.g., `cn` for Tailwind class merging).
- `public/`: Static assets (though most images are currently served from Supabase storage).

## User Preferences
- Follows a high-trust, professional medical aesthetic.
- Uses super-ellipse rounded corners (24px-40px).
- Prefers glassmorphism and soft shadows for depth.
- Footer credit: "2026 LocalRank. Todos los derechos reservados." linking to https://localrank.com.co/

## Project Guidelines
- No comments unless requested.
- Use functional components.
- Ensure all interactive components (using `onClick`, `useState`, etc.) are marked with `"use client"`.
- Maintain a cohesive color palette using CSS variables in `globals.css`.
- **H1 único por página**: `<h1>{{primary_keyword}} en {{city}} - {{brand}}</h1>`. Máximo 1 H1, keyword al inicio para CTR SERP.
- **H2/H3 jerarquía**: H2 para secciones principales (ej. "Servicios", "Contacto"), H3 para subsecciones. No saltar niveles; semántica estricta para crawlability.
- **Meta Title**: `<title>{{primary_keyword}} | {{brand}} {{city}}</title>`. 50-60 chars, keyword izquierda.
- **Meta Description**: `<meta name="description" content="{{150-char summary con CTA + keywords locales}}">`. Incluye llamada a acción (ej. "Agenda cita hoy").
- **Meta Robots**: `<meta name="robots" content="index, follow">` en <head> de landings públicas. Sitemap.xml auto-generado si multi-página.
- **Imágenes ALT**: Todo <img> con alt="{{descriptivo + keyword local}}" width/height definidos. Ej. alt="Dr. internista Medellín consulta hipertensión". Unsplash sources.
- **Responsive/Index**: `<meta name="viewport" content="width=device-width, initial-scale=1">`. Mobile-first Tailwind/flex/grid; evita espacios vacíos >20% viewport.
- **Regla global**: "Siempre genera SEO on-page completo antes de UI. Verifica jerarquía headings, metas y ALTs en preview. No cookie-cutter: production-ready con schema.org si aplica."

## Common Patterns
- Section-based architecture for the main landing page.
- Responsive grid layouts for benefits and services.
- Accessible accordions for FAQs.
