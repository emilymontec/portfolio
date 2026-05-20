// Registro global de proyectos para que se almacenen una vez cargados
const PROJECT_REGISTRY = {};
let activeProjectId = null;

// Función global que será llamada por los archivos JS cargados dinámicamente
window.registerProject = function (data) {
  if (data && data.id) {
    PROJECT_REGISTRY[data.id] = data;
  }
};

function renderProjectDetail(project, lang) {
  if (!project) return;

  document.getElementById('detailTitle').textContent = project[`title_${lang}`] || project.title;
  document.getElementById('detailSubtitle').textContent = project[`subtitle_${lang}`] || project.subtitle;
  document.getElementById('detailDescription').textContent = project[`description_${lang}`] || project.description;

  // Actualizar botones de enlaces
  const repoBtn = document.getElementById('detailRepo');
  const demoBtn = document.getElementById('detailDemo');

  if (project.repo && project.repo !== "#") {
    repoBtn.href = project.repo;
    repoBtn.style.display = 'inline-flex';
  } else {
    repoBtn.style.display = 'none';
  }

  if (project.demo && project.demo !== "#") {
    demoBtn.href = project.demo;
    demoBtn.style.display = 'inline-flex';
  } else {
    demoBtn.style.display = 'none';
  }

  // Iconos de tecnologías
  const techContainer = document.getElementById('detailTech');
  techContainer.innerHTML = '';
  if (project.technologies && Array.isArray(project.technologies)) {
    project.technologies.forEach(tech => {
      const isObject = typeof tech === 'object' && tech !== null;
      const iconClass = isObject ? tech.class : tech;
      const tooltip = isObject ? tech.tooltip : '';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'stack-icon';

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
}

window.refreshProjectDetailLanguage = function (lang) {
  const detail = document.getElementById('projectDetail');
  if (!activeProjectId || !detail || detail.style.display === 'none') return;

  renderProjectDetail(PROJECT_REGISTRY[activeProjectId], lang);
};

/**
 * Función para mostrar el detalle de un proyecto cargándolo dinámicamente
 */
async function showDetail(id) {
  const grid = document.getElementById('projectsGrid');
  const detail = document.getElementById('projectDetail');
  activeProjectId = id;

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

    // Actualizar contenido del detalle (respeta idioma activo)
    const lang = localStorage.getItem('emc-lang') || 'es';
    renderProjectDetail(project, lang);

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
  activeProjectId = null;

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

// Suavizado general de la página solo para enlaces internos reales
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Solo actuar si el href empieza con # y tiene más caracteres (evita "#" solo)
    if (href && href.startsWith('#') && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
