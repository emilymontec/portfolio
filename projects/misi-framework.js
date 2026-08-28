registerProject({
  id: "misi-framework",
  title: "MISI FRAMEWORK",
  title_es: "MISI FRAMEWORK",
  title_en: "MISI FRAMEWORK",
  subtitle: "FRAMEWORK PHP PARA SISTEMAS ADMINISTRATIVOS DE PEQUEÑOS NEGOCIOS",
  subtitle_es: "FRAMEWORK PHP PARA SISTEMAS ADMINISTRATIVOS DE PEQUEÑOS NEGOCIOS",
  subtitle_en: "PHP FRAMEWORK FOR SMALL BUSINESS MANAGEMENT SYSTEMS",
  image: "./assets/images/projects/misi-framework/misi-framework.jpg",
  images: [
    "./assets/images/projects/misi-framework/home.jpeg",
    "./assets/images/projects/misi-framework/features.jpeg",
    "./assets/images/projects/misi-framework/install.jpeg",
    "./assets/images/projects/misi-framework/cli.jpeg",
    "./assets/images/projects/misi-framework/ui-kit.jpeg",
  ],
  in_progress: false,
  technologies: [
    { class: "devicon-php-plain", tooltip_es: "Lenguaje principal del framework: routing, HTTP, base de datos, migraciones, autenticación, CSRF, almacenamiento y logging", tooltip_en: "Core framework language: routing, HTTP handling, database, migrations, authentication, CSRF protection, file storage, and logging" },
    { class: "devicon-javascript-plain", tooltip_es: "Interactividad del UI Kit y comportamiento de componentes en el lado del cliente", tooltip_en: "UI Kit interactivity and client-side component behavior" },
    { class: "devicon-css3-plain", tooltip_es: "Estilos del UI Kit integrado en el framework: componentes, layouts y utilidades visuales", tooltip_en: "Styles for the built-in UI Kit: components, layouts, and visual utilities" },
    { class: "devicon-html5-plain", tooltip_es: "Estructura de las vistas del framework, UI Kit y aplicación de demostración", tooltip_en: "Structure of framework views, UI Kit, and the demo application" },
    { class: "devicon-mysql-plain", tooltip_es: "Base de datos principal: soporte para migraciones, consultas y gestión de esquemas desde el framework", tooltip_en: "Primary database: migration support, query handling, and schema management built into the framework" },
  ],
  description: `
Misi es un framework PHP ligero desarrollado desde cero para crear sistemas administrativos y aplicaciones CRUD para pequeños y medianos negocios, enfocado en la reutilización de código, una arquitectura sencilla y el despliegue en hosting de bajo costo.

Desarrollé el framework de forma integral, implementando routing, manejo HTTP, base de datos, migraciones, validación, autenticación, roles y permisos, protección CSRF, almacenamiento de archivos y logging. También incorporé una CLI con generadores de código, un sistema de módulos y un Business Core reutilizable para clientes, productos y categorías.

Diseñé una arquitectura por capas que separa el núcleo técnico, las funcionalidades de negocio, los módulos y la aplicación específica de cada proyecto, permitiendo reutilizar la misma base para diferentes sistemas sin acoplarla a un negocio concreto.

El principal desafío fue mantener el framework funcional y reutilizable sin añadir complejidad innecesaria. Misi alcanzó la versión 1.1.0 e incluye una aplicación de demostración, documentación técnica, auditoría de seguridad y soporte para despliegue en hosting sin acceso SSH.

Proyecto desarrollado de forma integral como framework reutilizable para futuros proyectos web.
  `,
  description_es: `
Misi es un framework PHP ligero desarrollado desde cero para crear sistemas administrativos y aplicaciones CRUD para pequeños y medianos negocios, enfocado en la reutilización de código, una arquitectura sencilla y el despliegue en hosting de bajo costo.

Desarrollé el framework de forma integral, implementando routing, manejo HTTP, base de datos, migraciones, validación, autenticación, roles y permisos, protección CSRF, almacenamiento de archivos y logging. También incorporé una CLI con generadores de código, un sistema de módulos y un Business Core reutilizable para clientes, productos y categorías.

Diseñé una arquitectura por capas que separa el núcleo técnico, las funcionalidades de negocio, los módulos y la aplicación específica de cada proyecto, permitiendo reutilizar la misma base para diferentes sistemas sin acoplarla a un negocio concreto.

El principal desafío fue mantener el framework funcional y reutilizable sin añadir complejidad innecesaria. Misi alcanzó la versión 1.1.0 e incluye una aplicación de demostración, documentación técnica, auditoría de seguridad y soporte para despliegue en hosting sin acceso SSH.

Proyecto desarrollado de forma integral como framework reutilizable para futuros proyectos web.
  `,
  description_en: `
Misi is a lightweight PHP framework developed from scratch to create administrative systems and CRUD applications for small and medium-sized businesses, with a focus on code reusability, a simple architecture, and deployment on low-cost hosting.

I developed the framework from the ground up, implementing routing, HTTP handling, database management, migrations, validation, authentication, roles and permissions, CSRF protection, file storage, and logging. I also incorporated a CLI with code generators, a module system, and a reusable Business Core for customers, products, and categories.

I designed a layered architecture that separates the technical core, business logic, modules, and the project-specific application, allowing the same foundation to be reused for different systems without tying it to a specific business.

The main challenge was to keep the framework functional and reusable without adding unnecessary complexity. Misi has reached version 1.1.0 and includes a demo application, technical documentation, a security audit, and support for deployment on hosting platforms without SSH access.

This project was developed comprehensively as a reusable framework for future web projects.
  `,
  repo: "https://github.com/emilymontec/misi-framework",
  demo: "https://misi.freedev.app",
});
