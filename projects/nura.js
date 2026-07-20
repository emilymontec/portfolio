registerProject({
  id: "nura",
  title: "NURA INTELLIGENCE",
  title_es: "NURA INTELLIGENCE",
  title_en: "NURA INTELLIGENCE",
  subtitle: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_es: "SISTEMA DE INTELIGENCIA ARTIFICIAL PARA ANÁLISIS DE DATOS EMPRESARIALES",
  subtitle_en: "ARTIFICIAL INTELLIGENCE SYSTEM FOR BUSINESS DATA ANALYSIS",
  image: "./assets/images/projects/nura/nura.jpg",
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
Nura Intelligence es una plataforma de analítica conversacional impulsada por IA que transforma datos empresariales en insights, recomendaciones estratégicas, detección de riesgos y decisiones accionables.
Los usuarios pueden importar conjuntos de datos, visualizarlos mediante dashboards interactivos con KPIs y gráficos personalizables, y consultar la información en lenguaje natural a través de un asistente conversacional.
Incluye además un simulador de escenarios de negocio que permite evaluar posibles resultados antes de implementar decisiones reales.

Desarrollé la plataforma de extremo a extremo, diseñando una arquitectura de microservicios con Django, React y PostgreSQL, todo containerizado con Docker.
Integré múltiples proveedores de modelos de lenguaje (Groq, OpenRouter, Cerebras) mediante un sistema de enrutamiento inteligente que selecciona automáticamente el modelo más adecuado según el contexto de la consulta —por ejemplo, priorizando modelos especializados en razonamiento cuando la solicitud implica una recomendación estratégica de negocio.

El sistema procesa y analiza los registros con Numpy, Pandas y Scikit-learn antes de generar respuestas contextualizadas, combinando análisis de datos con capacidades de IA generativa.
Entre sus funcionalidades también destacan la importación/exportación de datos, exportación de dashboards y autenticación mediante Google.

Resultados:
El principal desafío fue integrar múltiples proveedores de IA manteniendo respuestas coherentes, contextualizadas y con tiempos adecuados, sin sacrificar escalabilidad.
La arquitectura de microservicios permitió incorporar nuevas capacidades (motor de predicciones, motor analítico) de forma independiente, sin afectar los módulos existentes.

Proyecto personal actualmente en producción y en proceso de implementación de nuevas funciones.
`,

description_en: `
Nura Intelligence is an AI-powered conversational analytics platform that transforms business data into insights, strategic recommendations, risk detection, and actionable decisions.
Users can import datasets, visualize them using interactive dashboards with customizable KPIs and charts, and query the information in natural language through a conversational assistant.
It also includes a business scenario simulator that allows users to evaluate potential outcomes before implementing actual decisions.

I developed the platform from end to end, designing a microservices architecture using Django, React, and PostgreSQL, all containerized with Docker.
I integrated multiple language model providers (Groq, OpenRouter, Cerebras) using an intelligent routing system that automatically selects the most appropriate model based on the context of the query—for example, prioritizing models specialized in reasoning when the request involves a strategic business recommendation.

The system processes and analyzes records using NumPy, Pandas, and Scikit-learn before generating contextualized responses, combining data analysis with generative AI capabilities.
Other key features include data import/export, dashboard export, and Google authentication.

Results:
The main challenge was to integrate multiple AI providers while maintaining consistent, contextualized, and timely responses, without sacrificing scalability.
The microservices architecture allowed us to incorporate new capabilities (prediction engine, analytics engine) independently, without affecting existing modules.

Personal project currently in production and in the process of implementing new features.
`,
repo: "https://github.com/emilymontec/nura",
demo: "https://nura-bi.onrender.com",
});
