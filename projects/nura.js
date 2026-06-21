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
Descripción:
Plataforma de Business Intelligence impulsada por IA que permite a usuarios no técnicos analizar datos empresariales, detectar patrones y generar reportes inteligentes para apoyar la toma de decisiones estratégicas.

Objetivo:
Automatizar el análisis de datos empresariales y convertir resultados estadísticos complejos en insights claros y recomendaciones accionables.

Rol:
Desarrollo full-stack, integración con APIs externas, procesamiento & análisis de datos, generación de insights y diseño de la experiencia de usuario.

Características Principales:
Procesamiento automatizado de archivos empresariales.
Limpieza y análisis de datos con Pandas.
Generación de insights mediante IA.
Sistema de autenticación y gestión de usuarios.
Generación automática de reportes.
Despliegue en la nube.

Retos & Soluciones:
Lograr un análisis profundo y útil de archivos empresariales más allá de métricas descriptivas básicas.
Diseñar arquitectura escalable para procesar grandes volúmenes de datos de manera eficiente.

Logros:
Creación de una herramienta que facilita el análisis de datos empresariales sin conocimientos técnicos.
Generación automática de reportes inteligentes y recomendaciones estratégicas.
Reducción del tiempo necesario para obtener información accionable a partir de datos complejos.
`,

description_en: `
Description:
AI-powered Business Intelligence platform that allows non-technical users to analyze business data, detect patterns, and generate intelligent reports to support strategic decision-making.

Objective:
Automate business data analysis and convert complex statistical results into clear insights and actionable recommendations.

Key Features:
Automated business file processing.
Data cleaning and analysis with Pandas.
AI-powered insights generation.
User authentication and management system.
Automatic report generation.
Cloud deployment.

Challenges & Solutions:
Integrate statistical analysis with language models to produce results understandable for non-technical users.
Design a scalable architecture to efficiently process large volumes of data.

Achievements:
Creation of a tool that facilitates business data analysis without technical knowledge.
Automatic generation of intelligent reports and strategic recommendations.
Reduction of time needed to obtain actionable information from complex data.
`,
repo: "https://github.com/emilymontec/nura",
demo: "https://nura-bi.onrender.com",
});
