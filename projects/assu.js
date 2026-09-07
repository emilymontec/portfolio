registerProject({
  id: "assu",
  title: "ASSU",
  title_es: "ASSU",
  title_en: "ASSU",
  subtitle: "SISTEMA DE VERIFICACIÓN AUTOMÁTICA DE TRANSFERENCIAS",
  subtitle_es: "SISTEMA DE VERIFICACIÓN AUTOMÁTICA DE TRANSFERENCIAS",
  subtitle_en: "AUTOMATIC TRANSFER VERIFICATION SYSTEM",
  image: "./assets/images/projects/assu/assu.jpg",
  images: [
    "./assets/images/projects/no-images.jpg",
  ],
  in_progress: true,
  technologies: [
    { class: "devicon-nestjs-plain", tooltip_es: "Framework principal del backend", tooltip_en: "Main backend framework" },
    { class: "devicon-typescript-plain", tooltip_es: "Desarrollo tipado para todo el sistema", tooltip_en: "Typed development for the whole system" },
    { class: "devicon-postgresql-plain", tooltip_es: "Persistencia de datos principal", tooltip_en: "Main data persistence" },
    { class: "devicon-redis-plain", tooltip_es: "Procesamiento asíncrono y colas con BullMQ", tooltip_en: "Asynchronous processing and queues with BullMQ" },
    { class: "devicon-playwright-plain", tooltip_es: "Automatización para consulta de movimientos bancarios", tooltip_en: "Automation for bank transactions querying" },
    { class: "devicon-nextjs-plain", tooltip_es: "Framework para el panel de operaciones", tooltip_en: "Framework for the operations dashboard" },
    { class: "devicon-tailwindcss-original", tooltip_es: "Estilos del panel de operaciones", tooltip_en: "Operations dashboard styling" }
  ],
  description: `
Sistema de verificación y conciliación automática de transferencias desarrollado para negocios colombianos. El proyecto nació de la necesidad de reducir la revisión manual de comprobantes de pago y facilitar la confirmación de que una transferencia realmente hubiera llegado a la cuenta del negocio.

Diseñé y desarrollé el sistema completo, desde el backend hasta el panel de operaciones. Assu automatiza la consulta de movimientos bancarios mediante Playwright, recibe comprobantes enviados por WhatsApp, utiliza OCR con Tesseract.js para extraer su información y posteriormente compara estos datos con los movimientos registrados mediante un motor de conciliación basado en reglas determinísticas.

Para procesar las verificaciones de forma asíncrona utilicé BullMQ y Redis, mientras que PostgreSQL y Prisma se encargan de la persistencia. También implementé una máquina de estados, idempotencia, control de concurrencia y auditoría para mantener la trazabilidad de cada verificación y diferenciar correctamente entre un pago confirmado, uno pendiente de validación, un rechazo y un error técnico.

El resultado fue un pipeline funcional capaz de automatizar gran parte del proceso de verificación, acompañado de un panel desarrollado con Next.js para gestionar las operaciones. El proyecto cuenta además con 199 pruebas unitarias distribuidas en 27 suites y una arquitectura desacoplada que facilita la incorporación de nuevas integraciones bancarias y servicios en el futuro.
  `,
  description_es: `
Sistema de verificación y conciliación automática de transferencias desarrollado para negocios colombianos. El proyecto nació de la necesidad de reducir la revisión manual de comprobantes de pago y facilitar la confirmación de que una transferencia realmente hubiera llegado a la cuenta del negocio.

Diseñé y desarrollé el sistema completo, desde el backend hasta el panel de operaciones. Assu automatiza la consulta de movimientos bancarios mediante Playwright, recibe comprobantes enviados por WhatsApp, utiliza OCR con Tesseract.js para extraer su información y posteriormente compara estos datos con los movimientos registrados mediante un motor de conciliación basado en reglas determinísticas.

Para procesar las verificaciones de forma asíncrona utilicé BullMQ y Redis, mientras que PostgreSQL y Prisma se encargan de la persistencia. También implementé una máquina de estados, idempotencia, control de concurrencia y auditoría para mantener la trazabilidad de cada verificación y diferenciar correctamente entre un pago confirmado, uno pendiente de validación, un rechazo y un error técnico.

El resultado fue un pipeline funcional capaz de automatizar gran parte del proceso de verificación, acompañado de un panel desarrollado con Next.js para gestionar las operaciones. El proyecto cuenta además con 199 pruebas unitarias distribuidas en 27 suites y una arquitectura desacoplada que facilita la incorporación de nuevas integraciones bancarias y servicios en el futuro.
  `,
  description_en: `
Automatic transfer verification and reconciliation system developed for Colombian businesses. The project was born from the need to reduce manual review of payment receipts and facilitate confirmation that a transfer actually reached the business account.

I designed and developed the complete system, from the backend to the operations dashboard. Assu automates bank transaction queries using Playwright, receives receipts sent via WhatsApp, uses OCR with Tesseract.js to extract their information, and then compares this data with registered transactions using a deterministic rules-based reconciliation engine.

To process verifications asynchronously I used BullMQ and Redis, while PostgreSQL and Prisma handle persistence. I also implemented a state machine, idempotency, concurrency control, and auditing to maintain traceability of each verification and correctly differentiate between a confirmed payment, one pending validation, a rejection, and a technical error.

The result was a functional pipeline capable of automating much of the verification process, accompanied by a dashboard developed with Next.js to manage operations. The project also features 199 unit tests distributed across 27 suites and a decoupled architecture that facilitates adding new bank integrations and services in the future.
  `,
  repo: "https://github.com/emilymontec/assu",
  demo: "#",
});
