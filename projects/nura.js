registerProject({
  id: "nura",
  title: "NURA INTELLIGENCE",
  title_es: "NURA INTELLIGENCE",
  title_en: "NURA INTELLIGENCE",
  subtitle: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_es: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_en: "ARTIFICIAL INTELLIGENCE SYSTEM FOR BUSINESS DATA ANALYSIS",
  image: "./assets/images/projects/nura.jpg",
  in_progress: true,
  technologies: [
    {class: "devicon-python-plain", tooltip_es: "Procesamiento de datos, lógica backend e integración de inteligencia artificial.", tooltip_en: "Data processing, backend logic, and AI integration." },
    {class: "devicon-django-plain", tooltip_es: "Arquitectura backend, autenticación y flujo estructurado de procesamiento.", tooltip_en: "Backend architecture, authentication, and structured processing flow." },
    {class: "devicon-pandas-plain", tooltip_es: "Procesamiento automatizado y análisis de datasets empresariales.", tooltip_en: "Automated processing and analysis of business datasets." },
    {class: "devicon-html5-plain", tooltip_es: "Estructura semántica para dashboards y módulos de análisis.", tooltip_en: "Semantic structure for dashboards and analysis modules." },
    {class: "devicon-css3-plain", tooltip_es: "Estilo visual y experiencia clara y consistente en la plataforma.", tooltip_en: "Visual styling and consistent experience for platform." },
    {class: "devicon-javascript-plain", tooltip_es: "Interacción dinámica y adaptación de la interfaz a las necesidades del usuario.", tooltip_en: "User interaction and dynamic adaptation." },
    {class: "devicon-supabase-plain", tooltip_es: "Persistencia relacional y análisis consistente de información empresarial.", tooltip_en: "Relational persistence and consistent business data analysis." },
    {svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg>`, tooltip_es: "Despliegue y configuración de entorno productivo en Render.", tooltip_en: "Deployment and configuration of production environment on Render." },
  ],

description_es: `
Desarrollé una plataforma de inteligencia empresarial impulsada por IA con backend en Django. Implementé procesamiento automatizado de archivos empresariales con Pandas, persistencia de datos en Supabase (PostgreSQL), e integración con modelos de lenguaje vía Groq para transformar resultados estadísticos en insights comprensibles y recomendaciones accionables. Construí toda la arquitectura desde cero, incluyendo autenticación, modelado de datos, generación de reportes y despliegue en Render.

Logré crear una nueva herramienta que permite a usuarios no técnicos analizar grandes volúmenes de datos empresariales, detectar patrones y anomalías, y generar reportes inteligentes para tomar decisiones estratégicas de manera sencilla.
`,

description_en: `
I developed an AI-powered business intelligence platform with Django backend. I implemented automated processing of business files with Pandas, data persistence in Supabase (PostgreSQL), and integration with language models via Groq to transform statistical results into understandable insights and actionable recommendations. I built the entire architecture from scratch, including authentication, data modeling, report generation, and deployment on Render.

I manage to create a tool that allows non-technical users to analyze large volumes of business data, detect patterns and anomalies, and generate intelligent reports to make strategic decisions easily.
`,
repo: "https://github.com/emilymontec/nura",
demo: "https://nura-bi.onrender.com",
});
