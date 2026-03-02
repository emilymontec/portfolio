// Registro global de proyectos para que se almacenen una vez cargados
const PROJECT_REGISTRY = {};

// Función global que será llamada por los archivos JS cargados dinámicamente
window.registerProject = function (data) {
  if (data && data.id) {
    PROJECT_REGISTRY[data.id] = data;
  }
};

/**
 * Función para mostrar el detalle de un proyecto cargándolo dinámicamente
 */
async function showDetail(id) {
  const grid = document.getElementById('projectsGrid');
  const detail = document.getElementById('projectDetail');

  // 1. Ocultar grid con transición natural
  grid.style.visibility = 'visible';
  grid.classList.add('hidden');

  // 2. Si el proyecto aún no está en el registro, cargamos su script JS
  if (!PROJECT_REGISTRY[id]) {
    try {
      await loadProjectScript(id);
    } catch (error) {
      console.error(`Error al cargar el script del proyecto: ${id}`, error);
      alert("Error al cargar la información del proyecto.");
      return;
    }
  }

  const project = PROJECT_REGISTRY[id];

  // 3. Esperar a que la animación de ocultar esté avanzada antes de llenar de datos
  setTimeout(() => {
    if (!project) return;

    // Actualizar contenido del detalle
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailSubtitle').textContent = project.subtitle;
    document.getElementById('detailDescription').textContent = project.description;
    document.getElementById('detailRepo').href = project.repo;
    document.getElementById('detailDemo').href = project.demo;

    // Iconos de tecnologías
    const techContainer = document.getElementById('detailTech');
    techContainer.innerHTML = ''; // Limpiar iconos anteriores
    if (project.technologies && Array.isArray(project.technologies)) {
      project.technologies.forEach(tech => {
        const isObject = typeof tech === 'object' && tech !== null;
        const iconClass = isObject ? tech.class : tech;
        const tooltip = isObject ? tech.tooltip : '';

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'stack-icon';

        // Si hay descripción, se añade como tooltip
        if (tooltip) {
          iconWrapper.setAttribute('data-tooltip', tooltip);
        }

        const icon = document.createElement('i');
        icon.className = iconClass;
        iconWrapper.appendChild(icon);
        techContainer.appendChild(iconWrapper);
      });
    }

    // Imagen del detalle
    const detailImg = document.getElementById('detailImage');
    if (project.image) {
      detailImg.src = project.image;
      detailImg.style.display = 'block';
    } else {
      detailImg.style.display = 'none';
    }

    // Mostrar detalle
    detail.style.display = 'block';

    // Forzar reflow para animación
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
 * Función auxiliar para inyectar un script y esperar a que se cargue
 */
function loadProjectScript(id) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `./projects/${id}.js`;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
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
