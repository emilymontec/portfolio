registerProject({
  id: "keisy",
  title: "KEISY",
  title_es: "KEISY",
  title_en: "KEISY",
  subtitle: "PLATAFORMA DE ANÁLISIS Y DETECCIÓN DE RIESGOS CLÍNICOS",
  subtitle_es: "PLATAFORMA DE ANÁLISIS Y DETECCIÓN DE RIESGOS CLÍNICOS",
  subtitle_en: "CLINICAL ANALYTICS & RISK DETECTION PLATAFORM",
  image: "./assets/images/projects/keisy.jpg",
  in_progress: false,
  technologies: [
    { class: "devicon-python-plain", tooltip_es: "Procesamiento de datos clínicos, automatización ETL y lógica analítica", tooltip_en: "Clinical data processing, ETL automation and analytical logic" },
    { class: "devicon-django-plain", tooltip_es: "Arquitectura backend y gestión segura de información clínica", tooltip_en: "Backend architecture and secure clinical information management" },
    { class: "devicon-pandas-plain", tooltip_es: "Limpieza, transformación y análisis de datasets médicos", tooltip_en: "Cleaning, transformation and analysis of medical datasets" },
    { class: "devicon-scikitlearn-plain", tooltip_es: "Modelos predictivos para detección de riesgos clínicos", tooltip_en: "Predictive models for clinical risk detection" },
    { class: "devicon-html5-plain", tooltip_es: "Estructura semántica para dashboards clínicos y módulos analíticos", tooltip_en: "Semantic structure for clinical dashboards and analytics modules" },
    { class: "devicon-bootstrap-plain", tooltip_es: "Construcción rápida de interfaces responsivas para visualización médica", tooltip_en: "Rapid development of responsive interfaces for medical visualization" },
    { class: "devicon-css3-plain", tooltip_es: "Estilos y organización del diseño visual del sistema clínico.", tooltip_en: "Styling and organization of visual design for clinical system." },
    { class: "devicon-javascript-plain", tooltip_es: "Lógica interactiva y actualización dinámica de métricas clínicas", tooltip_en: "Interactive logic and dynamic updates for clinical metrics"},
    { class: "devicon-chartjs-plain", tooltip_es: "Visualización de KPIs médicos, estadísticas clínicas y análisis de pacientes", tooltip_en: "Visualization of medical KPIs, clinical statistics and patient analytics" },
    { class: "devicon-supabase-plain", tooltip_es: "Persistencia estructurada de registros médicos y analítica clínica", tooltip_en: "Structured persistence for medical records and clinical analytics"},
    {svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg>`, tooltip_es: "Despliegue y configuración de entorno productivo en Render.", tooltip_en: "Deployment and configuration of production environment on Render." },
  ],
  description_es: `
¿Qué se hizo?
Desarrollé una plataforma full-stack para el sector salud con backend en Django y Python, integrando pipelines ETL automatizados para procesar datos clínicos. Utilicé Pandas para limpieza y transformación de datasets médicos, y scikit-learn para modelos predictivos (Random Forest, árboles de decisión, regresión logística) para detección de riesgos clínicos y pacientes críticos. Construí dashboards interactivos con HTML, Bootstrap y Chart.js para visualizar KPIs médicos y estadísticas, y persistí datos en Supabase. Desplegué la plataforma en Render.

¿Qué resultado se obtuvo?
Una solución que transforma datos médicos desorganizados en información accionable para IPS, con detección automática de pacientes de alto riesgo y dashboards que facilitan la toma de decisiones clínicas basada en datos.
`,
  description_en: `
What was done?
I developed a full-stack healthcare platform with Django and Python backend, integrating automated ETL pipelines to process clinical data. I used Pandas for cleaning and transforming medical datasets, and scikit-learn for predictive models (Random Forest, decision trees, logistic regression) for clinical risk detection and critical patient identification. I built interactive dashboards with HTML, Bootstrap, and Chart.js to visualize medical KPIs and statistics, and stored data in Supabase. I deployed the platform on Render.

What result was obtained?
A solution that transforms disorganized medical data into actionable insights for HCPs, with automatic detection of high-risk patients and dashboards that facilitate data-driven clinical decision-making.
`,
  repo: "https://github.com/emilymontec/keisy",
  demo: "https://keisy-medical.onrender.com",
});
