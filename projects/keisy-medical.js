registerProject({
  id: "keisy-medical",
  title: "KEISY MEDICAL",
  title_es: "KEISY MEDICAL",
  title_en: "KEISY MEDICAL",
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
Keisy Medical es un sistema de apoyo clínico que centraliza información médica, automatiza procesos ETL y aplica Machine Learning para identificar pacientes con mayor riesgo de complicaciones, clasificándolos en 4 niveles de riesgo (crítico, alto, medio, bajo) y generando alertas inteligentes basadas en su estado clínico.

Desarrollé la aplicación de forma integral utilizando Django, PostgreSQL, HTML y Bootstrap, implementando módulos para la gestión de pacientes, dashboards analíticos, estadísticas clínicas y generación de alertas.
Construí un pipeline ETL que permite importar datos desde archivos CSV, Excel y JSON, realizando procesos de limpieza, validación y normalización sobre 1,800 registros clínicos (eliminando duplicados e inválidos) antes de almacenarlos en la base de datos.

Para el análisis predictivo, entrené un modelo Random Forest con variables clínicas como edad, IMC, glucosa, colesterol, presión arterial sistólica y frecuencia cardíaca, permitiendo clasificar pacientes según su nivel de riesgo y compararlos con casos similares.
Completé el proyecto —backend, ML y frontend— en 2 semanas, trabajando en solitario como proyecto académico.

Resultados:
El principal desafío fue garantizar la calidad de los datos clínicos mediante procesos de limpieza y validación antes de su uso en los modelos predictivos, lo cual redujo significativamente los errores manuales de captura frente a un flujo sin automatizar.
El modelo alcanzó 91% de accuracy, 75% de precisión, 64% de recall y 67% de F1-score.

Proyecto entregado como demo funcional.
`,
  description_en: `
Keisy Medical is a clinical support system that centralizes medical information, automates ETL processes, and applies machine learning to identify patients at higher risk of complications, classifying them into four risk levels (critical, high, medium, low) and generating intelligent alerts based on their clinical status.

I developed the application from scratch using Django, PostgreSQL, HTML, and Bootstrap, implementing modules for patient management, analytical dashboards, clinical statistics, and alert generation.
I built an ETL pipeline that imports data from CSV, Excel, and JSON files, performing data cleaning, validation, and normalization on 1,800 clinical records (removing duplicates and invalid entries) before storing them in the database.

For predictive analysis, I trained a Random Forest model using clinical variables such as age, BMI, glucose, cholesterol, systolic blood pressure, and heart rate, enabling the classification of patients according to their risk level and comparison with similar cases.
I completed the project—backend, ML, and frontend—in 2 weeks, working independently as an academic project.

Results:
The main challenge was ensuring the quality of clinical data through cleaning and validation processes before using it in predictive models, which significantly reduced manual data entry errors compared to a non-automated workflow.
The model achieved 91% accuracy, 75% precision, 64% recall, and a 67% F1 score.

Project delivered as a working demo.
`,
  repo: "https://github.com/emilymontec/keisy",
  demo: "https://keisy-medical.onrender.com",
});
