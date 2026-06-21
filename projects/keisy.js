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
Descripción:
Plataforma de análisis de datos clínicos que automatiza el procesamiento de información médica y utiliza modelos de machine learning para identificar pacientes de alto riesgo y apoyar la toma de decisiones clínicas.

Objetivo:
Transformar datos clínicos dispersos y desorganizados en información útil para instituciones de salud mediante análisis predictivo y visualización de indicadores clave.

Rol:
Desarrollo full-stack, construcción de pipelines ETL, implementación de modelos predictivos y diseño de dashboards interactivos.

Características Principales:
Procesamiento automatizado de datos clínicos.
Pipelines ETL para limpieza y transformación de información médica.
Modelos predictivos con Random Forest, Árboles de Decisión y Regresión Logística.
Detección automática de pacientes de alto riesgo.
Dashboards interactivos para visualización de KPIs médicos.
Despliegue en producción.

Retos & Soluciones:
Trabajar con datos clínicos heterogéneos y de baja calidad mediante procesos de limpieza y validación.
Traducir resultados de modelos predictivos en visualizaciones claras para personal médico y administrativo.

Logros:
Automatización del análisis de datos clínicos.
Identificación temprana de pacientes con mayor riesgo.
Mejora en la visualización y monitoreo de indicadores de salud.
Soporte para la toma de decisiones clínicas basada en datos.
`,
  description_en: `
Description:
Clinical data analytics platform that automates medical information processing and uses machine learning models to identify high-risk patients and support clinical decision-making.

Objective:
Transform scattered and disorganized clinical data into useful information for healthcare institutions through predictive analytics and key indicator visualization.

Role:
Full-stack development, ETL pipeline construction, predictive model implementation, and interactive dashboard design.

Key Features:
Automated clinical data processing.
ETTL pipelines for cleaning and transforming medical information.
Predictive models with Random Forest, Decision Trees, and Logistic Regression.
Automatic detection of high-risk patients.
Interactive dashboards for medical KPI visualization.
Production deployment.

Challenges & Solutions:
Work with heterogeneous and low-quality clinical data through cleaning and validation processes.
Translate predictive model results into clear visualizations for medical and administrative staff.

Achievements:
Automation of clinical data analysis.
Early identification of patients at higher risk.
Improvement in visualization and monitoring of health indicators.
Support for data-driven clinical decision-making.
`,
  repo: "https://github.com/emilymontec/keisy",
  demo: "https://keisy-medical.onrender.com",
});
