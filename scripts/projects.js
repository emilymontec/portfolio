/**
 * Lista de Proyectos
 * Para añadir un proyecto nuevo: 
 * 1. Agrega un bloque nuevo con un ID único (ej. project4)
 * 2. Asegúrate de tener el botón correspondiente en el HTML con onclick="showDetail('ID')"
 */
const projects = {
  project1: {
    title: "Nombre del Proyecto 1",
    subtitle: "Tecnologías / Categoría",
    description: "Escribe aquí la descripción detallada del proyecto. Explica el problema que resuelve, los retos técnicos y las soluciones implementadas.",
    repo: "https://github.com/",
    demo: "#"
  },
  project2: {
    title: "Nombre del Proyecto 2",
    subtitle: "Tecnologías / Categoría",
    description: "Escribe aquí la descripción detallada del proyecto. Explica el problema que resuelve, los retos técnicos y las soluciones implementadas.",
    repo: "https://github.com/",
    demo: "#"
  },
  project3: {
    title: "Nombre del Proyecto 3",
    subtitle: "Tecnologías / Categoría",
    description: "Escribe aquí la descripción detallada del proyecto. Explica el problema que resuelve, los retos técnicos y las soluciones implementadas.",
    repo: "https://github.com/",
    demo: "#"
  }
};

/**
 * Función para suavizar el cambio de vista (Spotlight)
 */
function showDetail(id) {
  const project = projects[id];
  if (!project) return;

  const grid = document.getElementById('projectsGrid');
  const detail = document.getElementById('projectDetail');

  // 1. Ocultar grid con transición natural
  grid.style.visibility = 'visible'; 
  grid.classList.add('hidden');

  // 2. Esperar a que la animación de ocultar esté avanzada
  setTimeout(() => {
    // Actualizar contenido del detalle
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailSubtitle').textContent = project.subtitle;
    document.getElementById('detailDescription').textContent = project.description;
    document.getElementById('detailRepo').href = project.repo;
    document.getElementById('detailDemo').href = project.demo;

    // Mostrar detalle
    detail.style.display = 'block';
    
    // Forzar reflow
    void detail.offsetWidth;
    
    detail.classList.add('active');

    // Scroll suave y natural
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, 350);
}

/**
 * Función para volver al grid
 */
function hideDetail() {
  const grid = document.getElementById('projectsGrid');
  const detail = document.getElementById('projectDetail');

  detail.classList.remove('active');

  setTimeout(() => {
    detail.style.display = 'none';
    grid.classList.remove('hidden');
    
    setTimeout(() => {
      grid.style.visibility = 'visible';
    }, 50);
  }, 400);
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const detail = document.getElementById('projectDetail');
    if (detail && detail.classList.contains('active')) {
      hideDetail();
    }
  }
});

// Suavizado general de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
