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
  description: `
  KEISY es una plataforma full-stack orientada al sector salud diseñada para procesar, analizar y visualizar información clínica mediante automatización ETL, analítica médica y modelos predictivos.

  El sistema funciona como una plataforma inteligente de apoyo clínico para instituciones prestadoras de salud (IPS), permitiendo transformar grandes volúmenes de datos médicos desorganizados en información útil para la toma de decisiones. Integra múltiples módulos especializados, incluyendo:
  Procesamiento ETL
  Limpieza y transformación de datos clínicos
  Análisis estadístico
  Dashboards médicos
  Segmentación de pacientes
  Detección automática de pacientes críticos
  Predicción de riesgos clínicos mediante Machine Learning

  El módulo analítico permite generar KPIs médicos, estadísticas clínicas y segmentación avanzada utilizando indicadores relacionados con riesgo, enfermedades, IMC, edad y condiciones críticas.
  También detecta automáticamente pacientes de alto riesgo mediante reglas clínicas y modelos supervisados como Random Forest, árboles de decisión y regresión logística.

  La arquitectura backend fue desarrollada para manejar procesamiento intensivo de datos médicos, persistencia estructurada y automatización de pipelines ETL utilizando Python, Django y PostgreSQL.

  La plataforma busca combinar ingeniería de datos, analítica clínica y experiencia de usuario en una solución moderna orientada al sector healthtech.
  `,
  description_es: `
  KEISY es una plataforma full-stack orientada al sector salud diseñada para procesar, analizar y visualizar información clínica mediante automatización ETL, analítica médica y modelos predictivos.

  El sistema funciona como una plataforma inteligente de apoyo clínico para instituciones prestadoras de salud (IPS), permitiendo transformar grandes volúmenes de datos médicos desorganizados en información útil para la toma de decisiones. Integra múltiples módulos especializados, incluyendo:
  Procesamiento ETL
  Limpieza y transformación de datos clínicos
  Análisis estadístico
  Dashboards médicos
  Segmentación de pacientes
  Detección automática de pacientes críticos
  Predicción de riesgos clínicos mediante Machine Learning

  El módulo analítico permite generar KPIs médicos, estadísticas clínicas y segmentación avanzada utilizando indicadores relacionados con riesgo, enfermedades, IMC, edad y condiciones críticas.
  También detecta automáticamente pacientes de alto riesgo mediante reglas clínicas y modelos supervisados como Random Forest, árboles de decisión y regresión logística.

  La arquitectura backend fue desarrollada para manejar procesamiento intensivo de datos médicos, persistencia estructurada y automatización de pipelines ETL utilizando Python, Django y PostgreSQL.

  La plataforma busca combinar ingeniería de datos, analítica clínica y experiencia de usuario en una solución moderna orientada al sector healthtech.
  `,
  description_en: `
  KEISY is a full-stack platform designed for the healthcare sector to process, analyze, and visualize clinical information using ETL automation, medical analytics, and predictive models.

  The system functions as an intelligent clinical support platform for healthcare providers (HCPs), enabling the transformation of large volumes of unstructured medical data into actionable insights for decision-making. It integrates multiple specialized modules, including:
  ETL processing
  Clinical data cleansing and transformation
  Statistical analysis
  Medical dashboards
  Patient segmentation
  Automatic detection of critically ill patients
  Clinical risk prediction using machine learning

  The analytics module enables the generation of medical KPIs, clinical statistics, and advanced segmentation using indicators related to risk, diseases, BMI, age, and critical conditions.
  It also automatically detects high-risk patients using clinical rules and supervised models such as Random Forest, decision trees, and logistic regression.

  The backend architecture was developed to handle intensive medical data processing, structured persistence, and ETL pipeline automation using Python, Django, and PostgreSQL.

  The platform aims to combine data engineering, clinical analytics, and user experience into a modern solution tailored for the healthtech sector.
  `,
  repo: "https://github.com/emilymontec/keisy",
  demo: "https://keisy-medical.onrender.com",
});
