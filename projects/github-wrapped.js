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
Desarrollé una plataforma full-stack inspirada en Spotify Wrapped que integra la API de GitHub para extraer datos de actividad de desarrolladores (commits, repositorios, lenguajes más usados, frecuencia de trabajo). Construí el backend con Node.js y Express para procesar la información y generar métricas, y el frontend con React para la visualización interactiva de estadísticas y reportes personalizados. Incluí autenticación y persistencia de datos con Supabase, y análisis impulsado por IA para generar insights.

Logré crear una plataforma que transforma datos brutos de GitHub en reportes visuales atractivos, permitiendo a los desarrolladores entender sus hábitos de programación, productividad y patrones de trabajo de manera clara y dinámica.
`,
  description_en: `
I developed a full-stack platform inspired by Spotify Wrapped that integrates the GitHub API to extract developer activity data (commits, repositories, most-used languages, work frequency). I built the backend with Node.js and Express to process information and generate metrics, and the frontend with React for interactive visualization of statistics and personalized reports. I included authentication and data persistence with Supabase, and AI-driven analysis to generate insights.

I manage to create a platform that transforms raw GitHub data into attractive visual reports, allowing developers to understand their programming habits, productivity, and work patterns in a clear and dynamic way.
`,
  repo: "https://github.com/emilymontec/github-wrapped",
  demo: "",
});
