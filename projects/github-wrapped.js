registerProject({
  id: "github-wrapped",
  title: "GITHUB WRAPPED",
  title_es: "GITHUB WRAPPED",
  title_en: "GITHUB WRAPPED",
  subtitle: "PLATAFORMA DE VISUALIZACIÓN DE ACTIVIDAD DE DESARROLLADORES",
  subtitle_es: "PLATAFORMA DE VISUALIZACIÓN DE ACTIVIDAD DE DESARROLLADORES",
  subtitle_en: "PLATFORM FOR VISUALIZING DEVELOPER ACTIVITY",
  image: "./assets/images/projects/github-wrapped.jpg",
  in_progress: true,
  technologies: [
    { class: "devicon-javascript-plain", tooltip_es: "Lógica de interacción y procesamiento de información en tiempo real", tooltip_en: "Real-time interaction logic and information processing", },
    { class: "devicon-nodejs-plain", tooltip_es: "Procesamiento backend y generación de estadísticas de actividad", tooltip_en: "Backend processing and activity statistics generation", },
    { class: "devicon-express-original", tooltip_es: "API backend y procesamiento de métricas de actividad obtenidas desde GitHub", tooltip_en: "Backend API and activity metrics processing using GitHub data", },
    { class: "devicon-react-plain", tooltip_es: "Visualización interactiva de métricas y reportes personalizados", tooltip_en: "Interactive visualization of metrics and personalized reports", },
    { class: "devicon-supabase-plain", tooltip_es: "Autenticación, persistencia de datos y sincronización de actividad del usuario", tooltip_en: "Authentication, data persistence, and user activity synchronization", },
  ],
  description_es: `
Descripción:
Plataforma inspirada en Spotify Wrapped que analiza la actividad de desarrolladores en GitHub y genera reportes visuales personalizados sobre productividad, lenguajes utilizados, hábitos de programación y patrones de trabajo.

Objetivo:
Transformar datos técnicos de GitHub en métricas e insights fáciles de interpretar para que los desarrolladores puedan comprender mejor su evolución y desempeño.

Rol:
Desarrollo full-stack, integración con APIs externas, procesamiento de datos, generación de métricas y diseño de la experiencia de usuario.

Características Principales:
Integración con la API de GitHub.
Análisis de commits, repositorios y actividad de desarrollo.
Estadísticas sobre lenguajes de programación más utilizados.
Reportes personalizados inspirados en Spotify Wrapped.
Generación de insights mediante IA.
Sistema de autenticación y almacenamiento de datos.

Retos & Soluciones:
Procesar y consolidar información proveniente de múltiples endpoints de GitHub.
Diseñar visualizaciones atractivas que permitieran comunicar métricas complejas de forma sencilla y entretenida.

Logros:
Conversión de datos brutos de GitHub en reportes visuales interactivos.
Visualización clara de hábitos de programación y productividad.
Generación automática de insights personalizados para cada desarrollador.
Mejora de la experiencia de análisis de actividad profesional mediante una interfaz intuitiva.
`,
  description_en: `
Description:
Spotify Wrapped-inspired platform that analyzes developer activity on GitHub and generates custom visual reports on productivity, languages used, programming habits, and work patterns.

Objective:
Transform GitHub's technical data into easy-to-interpret metrics and insights so developers can better understand their evolution and performance.

Role:
Full-stack development, external API integration, data processing, metrics generation, and user experience design.

Key Features:
Integration with GitHub API.
Analysis of commits, repositories, and development activity.
Statistics on most-used programming languages.
Custom reports inspired by Spotify Wrapped.
AI-powered insights generation.
Authentication and data storage system.

Challenges & Solutions:
Process and consolidate information from multiple GitHub endpoints.
Design attractive visualizations that communicate complex metrics in a simple and entertaining way.

Achievements:
Conversion of raw GitHub data into interactive visual reports.
Clear visualization of programming habits and productivity.
Automatic generation of personalized insights for each developer.
Improvement of the professional activity analysis experience through an intuitive interface.
`,
  repo: "https://github.com/emilymontec/github-wrapped",
  demo: "",
});
