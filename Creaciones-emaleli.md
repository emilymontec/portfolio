## Versión corta (este se coloca en index.html)

**CREACIONES EMALELI: Plataforma E-commerce a Medida para Productos Personalizados**
Plataforma de e-commerce personalizada para gestionar productos personalizados, pedidos, producción, pagos, envíos y seguimiento del cliente. Arquitectura por capas, un sistema de estados y eventos para mantener trazabilidad durante todo el ciclo de vida del pedido, incluyendo seguimiento público sin necesidad de registro.


---

## Versión extendida:

Creaciones Emaleli es una plataforma de e-commerce a medida diseñada desde cero para un negocio de productos físicos personalizados, cubriendo todo el ciclo de vida del pedido: desde que el cliente configura un producto en el catálogo público hasta que el artículo se fabrica, se envía y se entrega, con visibilidad del proceso de producción para el cliente sin necesidad de una cuenta.

Diseñé la arquitectura completa del sistema aplicando una separación en capas (repositorios → servicios → Server Actions → componentes) dentro de Next.js App Router, evitando el problema habitual de mezclar acceso a datos y lógica de negocio directamente en las páginas. Modelé un esquema de datos de 24 entidades en Prisma que cubre catálogo con variantes y matriz de combinaciones (talla×color con stock y precio diferenciado), personalización de producto por campos configurables, una máquina de estados explícita para pedidos con timeline de eventos, producción con actualizaciones de avance y solicitudes de cambio, pagos con anticipos/abonos/saldo, envíos y auditoría de acciones administrativas.

Entre las decisiones técnicas más relevantes están el uso de snapshots inmutables (campos JSON) para preservar la configuración exacta de cada ítem comprado independientemente de cambios posteriores en el catálogo, y un token de seguimiento no adivinable que permite al cliente ver el estado de su pedido por enlace público sin autenticarse. El proyecto integra Supabase como base de datos PostgreSQL y almacenamiento de archivos, y usa WhatsApp mediante enlaces wa.me como canal de notificación al cliente sin depender de una API de mensajería de pago.

El principal desafío fue diseñar una estructura que separara claramente responsabilidades de negocio (backend) e interfaz (frontend) sin salirse de las restricciones del App Router de Next.js, manteniendo el código de servidor completamente fuera del bundle de cliente. El proyecto se encuentra en su fase de fundaciones (scaffolding arquitectónico completo, con el modelo de datos y la estructura de once módulos funcionales definidos) y avanza por fases hacia la implementación completa de catálogo, tienda pública, checkout, producción y reportes, con documentación técnica generada de forma continua a partir del propio código.

## Progess
False

## Tegnologias
Typescript, Next.js, supabase

## Image (vista simplificada)
creaciones-emaleli.jpg

## Image (vista extendida assets/images/projects/creaciones-emaleli)
shop.jpeg
cart.jpeg
login.jpeg
dashboard.jpeg
settings.jpeg