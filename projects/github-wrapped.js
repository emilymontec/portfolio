registerProject({
  id: "github-wrapped",
  title: "GitHub Wrapped: Tu Año en Código",
  title_es: "GitHub Wrapped: Tu Año en Código",
  title_en: "GitHub Wrapped: Your Year in Code",
  subtitle: "ANÁLISIS PERSONALIZADO DE TU ACTIVIDAD EN GITHUB",
  subtitle_es: "ANÁLISIS PERSONALIZADO DE TU ACTIVIDAD EN GITHUB",
  subtitle_en: "PERSONALIZED ANALYSIS OF YOUR GITHUB ACTIVITY",
  image: "./assets/images/projects/github-wrapped.jpg",
  in_progress: true,
  technologies: [
    { class: "devicon-javascript-plain", tooltip_es: "Lógica de interacción y procesamiento de información en tiempo real", tooltip_en: "Real-time interaction logic and information processing", },
    { class: "devicon-nodejs-plain", tooltip_es: "Procesamiento backend y generación de estadísticas de actividad", tooltip_en: "Backend processing and activity statistics generation", },
    { class: "devicon-express-original", tooltip_es: "API backend y procesamiento de métricas de actividad obtenidas desde GitHub", tooltip_en: "Backend API and activity metrics processing using GitHub data", },
    { class: "devicon-react-plain", tooltip_es: "Visualización interactiva de métricas y reportes personalizados", tooltip_en: "Interactive visualization of metrics and personalized reports", },
    { class: "devicon-supabase-plain", tooltip_es: "Autenticación, persistencia de datos y sincronización de actividad del usuario", tooltip_en: "Authentication, data persistence, and user activity synchronization", },
  ],
  description: `
GitHub Wrapped es una plataforma de analítica para desarrolladores inspirada en Spotify Wrapped, enfocada en visualizar métricas de productividad, actividad y patrones de desarrollo a partir de datos obtenidos desde GitHub.
La aplicación analiza información relacionada con commits, repositorios, lenguajes más utilizados y frecuencia de actividad para generar reportes personalizados e insights sobre hábitos de programación.

El sistema integra funcionalidades de:
Análisis de commits
Estadísticas de productividad
Visualización de actividad
Análisis de lenguajes
Reportes personalizados
Insights impulsados por IA

He construido tanto la lógica backend como la experiencia interactiva del usuario desde cero.

La API backend se encarga de procesar información obtenida desde GitHub, estructurar métricas relevantes y generar resultados visuales comprensibles y dinámicos.
Uno de los principales desafíos técnicos del proyecto es manejar correctamente grandes volúmenes de actividad, transformar datos complejos en métricas útiles y construir una experiencia visual atractiva sin perder rendimiento.

El proyecto busca combinar análisis de datos, experiencia de usuario e inteligencia artificial en una plataforma moderna orientada a desarrolladores.
`,
  description_es:`
GitHub Wrapped es una plataforma de analítica para desarrolladores inspirada en Spotify Wrapped, enfocada en visualizar métricas de productividad, actividad y patrones de desarrollo a partir de datos obtenidos desde GitHub.
La aplicación analiza información relacionada con commits, repositorios, lenguajes más utilizados y frecuencia de actividad para generar reportes personalizados e insights sobre hábitos de programación.

El sistema integra funcionalidades de:
Análisis de commits
Estadísticas de productividad
Visualización de actividad
Análisis de lenguajes
Reportes personalizados
Insights impulsados por IA

He construido tanto la lógica backend como la experiencia interactiva del usuario desde cero.

La API backend se encarga de procesar información obtenida desde GitHub, estructurar métricas relevantes y generar resultados visuales comprensibles y dinámicos.
Uno de los principales desafíos técnicos del proyecto es manejar correctamente grandes volúmenes de actividad, transformar datos complejos en métricas útiles y construir una experiencia visual atractiva sin perder rendimiento.

El proyecto busca combinar análisis de datos, experiencia de usuario e inteligencia artificial en una plataforma moderna orientada a desarrolladores.
`,
  description_en:`
GitHub Wrapped is a developer analytics platform inspired by Spotify Wrapped, focused on visualizing productivity metrics, activity patterns and development insights using GitHub data.
The application analyzes information related to commits, repositories, most-used languages and activity frequency to generate personalized reports and programming habit insights.

The system integrates features such as:
Commit analysis
Productivity statistics
Activity visualization
Language analytics
Personalized reports
AI-powered insights

I've built both the backend logic and the interactive user experience from scratch.

The backend API is responsible for processing GitHub data, structuring relevant metrics and generating dynamic and understandable visual results.
One of the main technical challenges is handling large amounts of activity data, transforming complex information into meaningful metrics and creating an engaging visual experience without sacrificing performance.

The project aims to combine data analytics, user experience and artificial intelligence into a modern platform designed for developers.
`,
  repo: "https://github.com/emilymontec/GITHUB-WRAPPED",
  demo: "",
});
