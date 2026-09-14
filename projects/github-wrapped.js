registerProject({
  id: "github-wrapped",
  title: "GITHUB WRAPPED",
  title_es: "GITHUB WRAPPED",
  title_en: "GITHUB WRAPPED",
  subtitle: "RESUMEN ANUAL DE ACTIVIDAD DE DESARROLLADORES EN GITHUB",
  subtitle_es: "RESUMEN ANUAL DE ACTIVIDAD DE DESARROLLADORES EN GITHUB",
  subtitle_en: "ANNUAL DEVELOPER ACTIVITY RECAP FOR GITHUB",
  image: "./assets/images/projects/github-wrapped/github-wrapped.jpg",
  images: [
    "./assets/images/projects/no-images.jpg",
  ],
  in_progress: true,
  technologies: [
    { class: "devicon-nextjs-plain", tooltip_es: "Framework principal full-stack con App Router: frontend, API routes e imágenes Open Graph", tooltip_en: "Core full-stack framework with App Router: frontend, API routes, and Open Graph images" },
    { class: "devicon-typescript-plain", tooltip_es: "Tipado estático en todo el sistema: API clients, colas de trabajo y motor de analítica", tooltip_en: "Static typing across the whole system: API clients, job queues, and analytics engine" },
    { class: "devicon-prisma-plain", tooltip_es: "ORM con esquema de datos relacional y migraciones sobre PostgreSQL", tooltip_en: "ORM with relational data schema and migrations on PostgreSQL" },
    { class: "devicon-postgresql-plain", tooltip_es: "Base de datos PostgreSQL gestionada (Neon) con sesiones y rate-limiting atómico", tooltip_en: "Managed PostgreSQL database (Neon) with sessions and atomic rate limiting" },
    { class: "devicon-tailwindcss-original", tooltip_es: "Estilos de la experiencia Wrapped y del dashboard", tooltip_en: "Styling for the Wrapped experience and the dashboard" },
    { class: "devicon-react-plain", tooltip_es: "Recharts para los gráficos de actividad y la visualización de datos en el cliente", tooltip_en: "Recharts for activity charts and client-side data visualization" },
    { class: "devicon-playwright-plain", tooltip_es: "Pruebas E2E, incluyendo un spec de seguridad dedicado", tooltip_en: "E2E testing, including a dedicated security spec" },
  ],
  description_es: `
GitHub Wrapped analiza la actividad pública de una persona desarrolladora en GitHub — commits, repositorios, lenguajes y horas de trabajo — y la convierte en un resumen anual personalizado y compartible al estilo de Spotify Wrapped. El objetivo no es solo mostrar números: es revelar insights de comportamiento que ayuden a las personas a entender sus hábitos reales, respaldados por un motor de analítica que calcula cada estadística antes de que cualquier narración generada por IA la toque.

El proyecto conecta vía OAuth de GitHub (Auth.js con estrategia de sesión en base de datos) y sincroniza la actividad mediante una cola de trabajos en segundo plano con Inngest, nunca dentro del ciclo de vida de una petición HTTP, de modo que un usuario con decenas de miles de commits no quede limitado por el timeout de una función serverless. El motor de analítica está deliberadamente desacoplado de la API de GitHub, de la base de datos y de la interfaz, normaliza los timestamps al huso horario del usuario y se cubre con unit tests usando msw. Los clientes REST y GraphQL manejan rate-limiting independiente, paginación por cursores y reintentos con backoff exponencial ante respuestas de límite de API.

La generación de la experiencia Wrapped construye un deck de diapositivas por año con páginas públicas compartibles e imágenes Open Graph generadas automáticamente, y la narración de insights se basa estrictamente en métricas precomputadas, con plantillas deterministas como fallback cuando no hay clave de IA configurada. El principal desafío fue mantener cada estadística trazable hasta datos reales y no a un cálculo improvisado de la IA, además de endurecer la seguridad de cara a producción: tokens cifrados con AES-256-GCM, endpoints protegidos contra IDOR y webhooks verificados por HMAC. El proyecto se encuentra en desarrollo activo y avanza por fases hacia la implementación completa de comparaciones entre usuarios, insignias automáticas y seguimiento año tras año.
  `,
  description_en: `
GitHub Wrapped analyzes a developer's public GitHub activity — commits, repositories, languages, and working hours — and turns it into a personalized, shareable annual recap in the style of Spotify Wrapped. The goal isn't just to show numbers: it's to surface behavioral insights that help developers actually understand their habits, backed by an analytics engine that computes every statistic before any AI-generated narration touches it.

The project connects via GitHub OAuth (Auth.js with database session strategy) and syncs activity through a background job queue with Inngest, never inline in an HTTP request, so a user with tens of thousands of commits is never limited by a serverless function timeout. The analytics engine is deliberately decoupled from the GitHub API, the database, and the UI, normalizes timestamps to the user's timezone, and is covered by unit tests using msw. The REST and GraphQL clients handle independent rate limiting, cursor-based pagination, and exponential backoff with jitter on rate-limit responses.

Wrapped generation builds a slide-by-slide deck per year with public, shareable pages and auto-generated Open Graph images, and the insights narration is strictly based on pre-computed metrics, falling back to deterministic templates when no AI key is configured. The main challenge was keeping every statistic traceable to real data instead of an AI's best guess, while hardening security for production: encrypted tokens with AES-256-GCM, IDOR-safe endpoints, and HMAC-verified webhooks. The project is in active development and progresses in phases toward the full implementation of comparisons between users, automatic badges, and year-over-year tracking.
  `,
  repo: "https://github.com/emilymontec/my-github-wrapped",
  demo: "https://my-github-wrapped.vercel.app",
});