/**
 * PLANTILLA PARA NUEVOS PROYECTOS
 * Instrucciones:
 * 1. Copia este archivo y cámbiale el nombre (ej. mi-proyecto.js).
 * 2. El ID dentro de registerProject DEBE coincidir con el nombre del archivo (ej. id: "mi-proyecto").
 * 3. En index.html, usa: onclick="showDetail('mi-proyecto')"
 */

registerProject({
    id: "nombre-del-archivo", // DEBE coincidir con el nombre del archivo .js
    title: "TÍTULO DEL PROYECTO",
    subtitle: "Lenguajes / Herramientas / Categoría",
    image: "./assets/images/projects/nombre-imagen.jpg", // Ruta de la imagen
    description: "Escribe aquí una descripción detallada. Puedes usar varias líneas. Explica qué hace el proyecto, qué tecnologías usaste y qué problemas resolviste.",
    repo: "https://github.com/tu-usuario/tu-repo", // Link a GitHub
    demo: "https://tu-demo-online.com" // Link al proyecto en vivo o # si no tiene
});
