registerProject({
    id: "ATLASBank",
    title: "ATLASBank",
    subtitle: "SISTEMA BANCARIO CON MOTOR DE SIMULACIÓN FINANCIERA",
    image: "./assets/images/projects/atlasbank.png",
    technologies: [
        { class: "devicon-java-plain", tooltip: "Java, lenguaje seleccionado" },
        { class: "devicon-spring-plain", tooltip: "Spring Boot como base (lógica) del sistema" },
        { class: "devicon-postgresql-plain", tooltip: "Clásico PostgreSQL para datos" },
        { class: "devicon-html5-plain", tooltip: "HTML: estructura" },
        { class: "devicon-css3-plain", tooltip: "CSS para interfaz + responsive" },
        { class: "devicon-javascript-plain", tooltip: "JavaScript = interactividad + funcionalidades" }
    ],
    description: `Sistema bancario completo que replica operaciones reales (gestión de cuentas, transferencias, depósitos y retiros), complementado con un módulo de simulación financiera orientado al análisis de escenarios.
    El sistema incorpora validaciones estrictas para garantizar la integridad de los saldos y un enfoque transaccional que asegura la consistencia de las operaciones. Implementé además un sistema antifraude básico que analiza condiciones como comportamiento y ubicación, generando alertas ante actividades sospechosas sin interrumpir el flujo normal del usuario.
    La principal diferenciación es el motor de simulación, que permite proyectar el comportamiento financiero de cuentas a lo largo del tiempo bajo condiciones controladas por un administrador (intereses, préstamos y parámetros de crédito), separando la lógica operativa de la lógica de análisis.`,
    repo: "https://github.com/emilymontec/java/tree/main/AtlasBank",
    demo: ""
});
