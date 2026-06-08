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
    {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 201"><path fill="#FEFBFB" d="M0 0h201v201H0Z"/><path fill="#450815" d="m128 49 1.895 1.52C136.336 56.288 140.602 64.49 142 73c.097 1.823.148 3.648.161 5.474l.03 3.247.012 3.482.017 3.613c.01 2.522.016 5.044.02 7.565.01 3.84.041 7.68.072 11.521.007 2.455.012 4.91.016 7.364l.038 3.457c-.033 11.717-3.373 21.83-11.475 30.547-4.552 4.23-9.148 7.372-14.891 9.73l-2.387 1.055c-9.275 3.355-20.3 2.397-29.379-1.13-5.016-2.38-9.156-5.17-13.234-8.925 3.678-4.526 7.41-8.394 12-12l3.063 2.375c5.572 3.958 11.135 5.211 17.937 4.625 6.96-1.384 12.455-4.502 17-10 4.174-6.784 4.59-12.222 4.531-20.094l.012-3.473c.003-2.414-.005-4.827-.022-7.241-.02-3.68 0-7.36.026-11.04-.003-2.353-.008-4.705-.016-7.058l.025-3.312c-.098-7.996-1.732-13.21-6.681-19.47-6.786-5.458-13.105-8.211-21.914-7.792-7.327 1.188-13.278 4.7-17.777 10.601C75.472 72.012 73.86 78.07 75 85c2.191 7.547 5.019 13.948 12 18 5.848 3.061 10.892 3.523 17.438 3.688l2.794.103c2.256.082 4.512.147 6.768.209v16c-16.682.673-29.615.654-42.852-10.848-8.28-8.296-13.338-19.55-13.71-31.277.394-9.87 3.93-17.894 9.562-25.875l1.688-2.563C84.698 35.563 110.05 34.436 128 49Z"/></svg>`, tooltip_es: "Inferencia de IA de alta velocidad con Groq.", tooltip_en: "High-speed AI inference with Groq." },
    {svg: `<svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M3 248.945C18 248.945 76 236 106 219C136 202 136 202 198 158C276.497 102.293 332 120.945 423 120.945" stroke-width="90"/><path d="M511 121.5L357.25 210.268L357.25 32.7324L511 121.5Z" fill="currentColor" stroke="none"/><path d="M0 249C15 249 73 261.945 103 278.945C133 295.945 133 295.945 195 339.945C273.497 395.652 329 377 420 377" stroke-width="90"/><path d="M508 376.445L354.25 287.678L354.25 465.213L508 376.445Z" fill="currentColor" stroke="none"/></svg>`, tooltip_es: "Acceso unificado a múltiples modelos de IA mediante OpenRouter.", tooltip_en: "Unified access to multiple AI models through OpenRouter." },
    {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 201"><rect width="201" height="201" fill="currentColor"/><pathfill="transparent"stroke="transparent"d="m128 49 1.895 1.52C136.336 56.288 140.602 64.49 142 73c.097 1.823.148 3.648.161 5.474l.03 3.247.012 3.482.017 3.613c.01 2.522.016 5.044.02 7.565.01 3.84.041 7.68.072 11.521.007 2.455.012 4.91.016 7.364l.038 3.457c-.033 11.717-3.373 21.83-11.475 30.547-4.552 4.23-9.148 7.372-14.891 9.73l-2.387 1.055c-9.275 3.355-20.3 2.397-29.379-1.13-5.016-2.38-9.156-5.17-13.234-8.925 3.678-4.526 7.41-8.394 12-12l3.063 2.375c5.572 3.958 11.135 5.211 17.937 4.625 6.96-1.384 12.455-4.502 17-10 4.174-6.784 4.59-12.222 4.531-20.094l.012-3.473c.003-2.414-.005-4.827-.022-7.241-.02-3.68 0-7.36.026-11.04-.003-2.353-.008-4.705-.016-7.058l.025-3.312c-.098-7.996-1.732-13.21-6.681-19.47-6.786-5.458-13.105-8.211-21.914-7.792-7.327 1.188-13.278 4.7-17.777 10.601C75.472 72.012 73.86 78.07 75 85c2.191 7.547 5.019 13.948 12 18 5.848 3.061 10.892 3.523 17.438 3.688l2.794.103c2.256.082 4.512.147 6.768.209v16c-16.682.673-29.615.654-42.852-10.848-8.28-8.296-13.338-19.55-13.71-31.277.394-9.87 3.93-17.894 9.562-25.875l1.688-2.563C84.698 35.563 110.05 34.436 128 49Z"/></svg>`, tooltip_es: "Entrenamiento e inferencia de IA acelerada con Cerebras.", tooltip_en: "Accelerated AI training and inference with Cerebras." },
    {class: "devicon-supabase-plain", tooltip_es: "Persistencia relacional y análisis consistente de información empresarial.", tooltip_en: "Relational persistence and consistent business data analysis." },
    {svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg>`, tooltip_es: "Despliegue y configuración de entorno productivo en Render.", tooltip_en: "Deployment and configuration of production environment on Render." },
  ],

description_es: `Nura es una plataforma de inteligencia empresarial impulsada por IA diseñada para automatizar el análisis de datos y facilitar la generación de decisiones estratégicas.

La aplicación permite procesar archivos empresariales, analizar grandes volúmenes de información y detectar patrones relevantes, anomalías y métricas clave mediante procesamiento automatizado utilizando Pandas y PostgreSQL (Supabase).

El sistema integra modelos de lenguaje mediante Groq para transformar resultados estadísticos en insights comprensibles, recomendaciones accionables y reportes inteligentes orientados a usuarios no técnicos.

Toda la arquitectura backend fue desarrollada utilizando Django, implementando autenticación, persistencia de datos, procesamiento de archivos y flujo completo de análisis de información. El proyecto fue construido desde cero, incluyendo:
Arquitectura backend
Modelado de datos
Integración IA
Procesamiento automatizado
Generación de reportes
Despliegue en producción

Uno de los principales desafíos técnicos fue diseñar un pipeline capaz de transformar información compleja en resultados claros y útiles sin perder precisión ni contexto empresarial. También fue necesario equilibrar rendimiento, flexibilidad y claridad visual para distintos tipos de datasets empresariales.
`,

description_en: `
Nura is an AI-powered business intelligence platform designed to automate data analysis and support strategic decision-making.

The application processes business files, analyzes large volumes of information and detects relevant patterns, anomalies and key metrics through automated processing using Pandas and PostgreSQL (Supabase).

The system integrates language models through Groq to transform statistical outputs into understandable insights, actionable recommendations and intelligent reports aimed at non-technical users.

The entire backend architecture was developed using Django, implementing authentication, data persistence, file processing and a complete information analysis workflow. The project was built entirely from scratch, including:
Backend architecture
Data modeling
AI integration
Automated processing
Report generation
Production deployment

One of the main technical challenges was designing a pipeline capable of transforming complex information into clear and useful results without losing precision or business context. It was also necessary to balance performance, flexibility and clarity across different types of business datasets.
`,
repo: "https://github.com/emilymontec/nura",
demo: "https://nura-bi.onrender.com",
});