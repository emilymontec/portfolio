registerProject({
    id: "ATLASBank",
    title: "ATLASBank",
    subtitle: "SISTEMA BANCARIO",
    image: "./assets/images/projects/atlasbank.png",
    technologies: [
        { class: "devicon-java-plain", tooltip: "Java, lenguaje seleccionado" },
        { class: "devicon-spring-plain", tooltip: "Spring Boot como base (lógica) del sistema" },
        { class: "devicon-postgresql-plain", tooltip: "Clásico PostgreSQL para datos" },
        { class: "devicon-html5-plain", tooltip: "HTML: estructura" },
        { class: "devicon-css3-plain", tooltip: "CSS para interfaz + responsive" },
        { class: "devicon-javascript-plain", tooltip: "JavaScript = interactividad + funcionalidades" }
    ],
    description: `Simulador bancario enfocado en backend, desarrollado con Java y Spring Boot, que modela operaciones financieras como creación de cuentas, depósitos, retiros y manejo de transacciones.
    El proyecto está estructurado con arquitectura por capas (Controller, Service, Repository), priorizando la separación de responsabilidades, la claridad en la lógica de negocio y la escalabilidad.`,
    repo: "https://github.com/emilymontec/java/tree/main/AtlasBank",
    demo: ""
});
