registerProject({
    id: "SIGLO",
    title: "SIGLO",
    subtitle: "SISTEMA DE GESTIÓN DE LOTES",
    image: "./assets/images/projects/siglo-js.png",
    technologies: [
        { class: "devicon-python-plain", tooltip: "Python, lenguaje seleccionado" },
        { class: "devicon-django-plain", tooltip: "Django como base (lógica) del sistema" },
        { class: "devicon-postgresql-plain", tooltip: "Clásico PostgreSQL para datos" },
        { class: "devicon-bootstrap-plain", tooltip: "Bootstrap para interfaz + responsive" },
        { class: "devicon-javascript-plain", tooltip: "JavaScript = interactividad + funcionalidades" }
    ],
    description: `SIGLO es un sistema web desarrollado con Django y PostgreSQL para la gestión de lotes inmobiliarios.
    Permite administrar propiedades mediante autenticación por roles (admin y cliente), gestión completa de activos, sistema de reservas, visualización geográfica en mapa interactivo, dashboard con métricas y un chatbot con acceso a base de datos para consultas automatizadas.
    Proyecto preparado para entorno productivo: migración de SQLite a PostgreSQL, configuración mediante variables de entorno y despliegue en la nube.
    Integra backend, base de datos y lógica de negocio en una solución funcional pensada para operar fuera del entorno 'académico'.`,
    repo: "https://github.com/emilymontec/SIGLO",
    demo: "https://siglo.onrender.com/"
});
