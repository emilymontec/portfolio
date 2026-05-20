registerProject({
  id: "nura",
  title: "NURA INTELLIGENCE",
  title_es: "NURA INTELLIGENCE",
  title_en: "NURA INTELLIGENCE",
  subtitle: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_es: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_en: "ARTIFICIAL INTELLIGENCE SYSTEM FOR BUSINESS DATA ANALYSIS",
  image: "./assets/images/projects/nura.jpg",
  technologies: [
    {class: "devicon-python-plain", tooltip: "Procesamiento de datos, lógica backend e integración de inteligencia artificial." },
    {class: "devicon-django-plain", tooltip: "Arquitectura backend, autenticación y flujo estructurado de procesamiento." },
    {class: "devicon-supabase-plain", tooltip: "Persistencia relacional y análisis consistente de información empresarial." },
    {class: "devicon-pandas-plain", tooltip: "Procesamiento automatizado y análisis de datasets empresariales." },
    {class: "devicon-vercel-plain", tooltip: "Despliegue y configuración de entorno productivo." },
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
repo: "https://github.com/emilymontec/NURA",
demo: "https://nura-q50w.onrender.com/",

});
