registerProject({
  id: "creaciones-emaleli",
  title: "CREACIONES EMALELI",
  title_es: "CREACIONES EMALELI",
  title_en: "CREACIONES EMALELI",
  subtitle: "PLATAFORMA E-COMMERCE A MEDIDA PARA PRODUCTOS PERSONALIZADOS",
  subtitle_es: "PLATAFORMA E-COMMERCE A MEDIDA PARA PRODUCTOS PERSONALIZADOS",
  subtitle_en: "BESPOKE E-COMMERCE PLATFORM FOR PERSONALIZED PRODUCTS",
  image: "./assets/images/projects/creaciones-emaleli/creaciones-emaleli.jpg",
  images: [
    "./assets/images/projects/creaciones-emaleli/shop.jpeg",
    "./assets/images/projects/creaciones-emaleli/cart.jpeg",
    "./assets/images/projects/creaciones-emaleli/login.jpeg",
    "./assets/images/projects/creaciones-emaleli/dashboard.jpeg",
    "./assets/images/projects/creaciones-emaleli/settings.jpeg"
  ],
  in_progress: false,
  technologies: [
    { class: "devicon-typescript-plain", tooltip_es: "Tipado estático y seguridad de tipos en todo el sistema backend y cliente", tooltip_en: "Static typing and type safety across backend and client code" },
    { class: "devicon-nextjs-plain", tooltip_es: "Framework principal con App Router: Server Actions, componentes y arquitectura por capas", tooltip_en: "Core framework using App Router: Server Actions, components, and layered architecture" },
    { class: "devicon-supabase-plain", tooltip_es: "Base de datos PostgreSQL y almacenamiento de archivos de la plataforma", tooltip_en: "PostgreSQL database and file storage for the platform" },
  ],
  description_es: `
Creaciones Emaleli es una plataforma de e-commerce a medida diseñada desde cero para un negocio de productos físicos personalizados, cubriendo todo el ciclo de vida del pedido: desde que el cliente configura un producto en el catálogo público hasta que el artículo se fabrica, se envía y se entrega, con visibilidad del proceso de producción para el cliente sin necesidad de una cuenta.

Diseñé la arquitectura completa del sistema aplicando una separación en capas (repositorios → servicios → Server Actions → componentes) dentro de Next.js App Router, evitando el problema habitual de mezclar acceso a datos y lógica de negocio directamente en las páginas. Modelé un esquema de datos de 24 entidades en Prisma que cubre catálogo con variantes y matriz de combinaciones (talla×color con stock y precio diferenciado), personalización de producto por campos configurables, una máquina de estados explícita para pedidos con timeline de eventos, producción con actualizaciones de avance y solicitudes de cambio, pagos con anticipos/abonos/saldo, envíos y auditoría de acciones administrativas.

Entre las decisiones técnicas más relevantes están el uso de snapshots inmutables (campos JSON) para preservar la configuración exacta de cada ítem comprado independientemente de cambios posteriores en el catálogo, y un token de seguimiento no adivinable que permite al cliente ver el estado de su pedido por enlace público sin autenticarse. El proyecto integra Supabase como base de datos PostgreSQL y almacenamiento de archivos, y usa WhatsApp mediante enlaces wa.me como canal de notificación al cliente sin depender de una API de mensajería de pago.

El principal desafío fue diseñar una estructura que separara claramente responsabilidades de negocio (backend) e interfaz (frontend) sin salirse de las restricciones del App Router de Next.js, manteniendo el código de servidor completamente fuera del bundle de cliente. El proyecto se encuentra en su fase de fundaciones (scaffolding arquitectónico completo, con el modelo de datos y la estructura de once módulos funcionales definidos) y avanza por fases hacia la implementación completa de catálogo, tienda pública, checkout, producción y reportes, con documentación técnica generada de forma continua a partir del propio código.
  `,
  description_en: `
Creaciones Emaleli is a bespoke e-commerce platform designed from scratch for a business selling personalized physical products, covering the entire order lifecycle: from the moment a customer configures a product in the public catalog until the item is manufactured, shipped, and delivered, giving the customer visibility of the production process without requiring an account.

I designed the complete system architecture applying a layered separation (repositories → services → Server Actions → components) within Next.js App Router, avoiding the common problem of mixing data access and business logic directly into pages. I modeled a 24-entity Prisma data schema covering a catalog with variants and a combination matrix (size×color with differentiated stock and pricing), product customization through configurable fields, an explicit state machine for orders with an event timeline, production with progress updates and change requests, payments with deposits/partial payments/balance, shipping, and administrative action auditing.

Among the most relevant technical decisions are the use of immutable snapshots (JSON fields) to preserve the exact configuration of each purchased item regardless of later catalog changes, and an unpredictable tracking token that lets customers check their order status through a public link without authentication. The project integrates Supabase as the PostgreSQL database and file storage, and uses WhatsApp via wa.me links as the customer notification channel without relying on a paid messaging API.

The main challenge was designing a structure that clearly separates business (backend) and interface (frontend) responsibilities without breaking the constraints of Next.js App Router, keeping server code completely out of the client bundle. The project is in its foundations phase (complete architectural scaffolding, with the data model and the structure of eleven functional modules defined) and progresses in phases toward the full implementation of catalog, public store, checkout, production, and reports, with technical documentation continuously generated from the code itself.
  `,
  repo: "https://github.com/emilymontec/creaciones-emaleli",
  demo: "https://creaciones-emaleli.vercel.app/",
});