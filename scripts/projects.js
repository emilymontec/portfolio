// Registro global de proyectos para que se almacenen una vez cargados
const PROJECT_REGISTRY = {};
let activeProjectId = null;
let detailCarouselInterval = null;

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
      const tooltip = isObject ? (tech[`tooltip_${lang}`] || tech.tooltip) : '';

      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'stack-icon';

      if (tooltip) {
        iconWrapper.setAttribute('data-tooltip', tooltip);
      }

      if (isObject && tech.svg) {
        iconWrapper.innerHTML = tech.svg;
      } else {
        const icon = document.createElement('i');
        icon.className = iconClass;
        iconWrapper.appendChild(icon);
      }
      
      techContainer.appendChild(iconWrapper);
    });
  }

  // Imagen del detalle — carrusel con pan vertical
  const detailContainer = document.querySelector('.detail-image-container');
  detailContainer.querySelectorAll('.detail-carousel-img').forEach(el => el.remove());

  if (detailCarouselInterval) {
    clearInterval(detailCarouselInterval);
    detailCarouselInterval = null;
  }

  const allImages = [];
  if (project.images && project.images.length > 0) {
    allImages.push(...project.images);
  } else if (project.image) {
    allImages.push(project.image);
  }
  const uniqueImages = [...new Set(allImages)];

  const detailImg = document.getElementById('detailImage');
  if (uniqueImages.length === 0) {
    detailImg.style.display = 'none';
    return;
  }

  detailImg.style.display = 'none';

  const imgs = uniqueImages.map((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = project.title || 'Project Preview';
    img.className = 'detail-carousel-img';
    if (i === 0) img.classList.add('active');
    detailContainer.appendChild(img);
    return img;
  });

  if (uniqueImages.length > 1) {
    let current = 0;
    detailCarouselInterval = setInterval(() => {
      const outImg = imgs[current];
      current = (current + 1) % imgs.length;
      const inImg = imgs[current];

      outImg.classList.remove('active');
      outImg.classList.add('exit');
      inImg.classList.add('active');

      setTimeout(() => outImg.classList.remove('exit'), 900);
    }, 5500);
  }

  // Etiqueta 'En Desarrollo'
  const inProgressBadge = document.getElementById('detailBadge');
  if (inProgressBadge) {
    if (project.in_progress) {
      inProgressBadge.textContent = lang === 'es' ? 'En Desarrollo' : 'In Progress';
      inProgressBadge.style.display = 'flex';
    } else {
      inProgressBadge.style.display = 'none';
    }
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

  if (detailCarouselInterval) {
    clearInterval(detailCarouselInterval);
    detailCarouselInterval = null;
  }

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

// Precargar proyectos y generar etiquetas 'En Desarrollo' dinámicamente en la grilla
document.addEventListener('DOMContentLoaded', async () => {
  const cards = document.querySelectorAll('.project-card[onclick]');
  const loadPromises = [];
  
  // Iniciar carga de todos los proyectos en la grilla
  cards.forEach(card => {
    const match = card.getAttribute('onclick').match(/showDetail\(['"](.*?)['"]\)/);
    if (match && match[1]) {
      const id = match[1];
      if (!PROJECT_REGISTRY[id]) {
        loadPromises.push(loadProjectScript(id).catch(e => console.warn(`Error precargando ${id}`, e)));
      }
    }
  });

  await Promise.all(loadPromises);

  // Sincronizar etiquetas de "En Desarrollo"
  cards.forEach(card => {
    const match = card.getAttribute('onclick').match(/showDetail\(['"](.*?)['"]\)/);
    if (match && match[1]) {
      const id = match[1];
      const proj = PROJECT_REGISTRY[id];
      
      let badge = card.querySelector('.in-progress-badge');
      
      if (proj && proj.in_progress) {
        if (!badge) {
          badge = document.createElement('div');
          badge.className = 'in-progress-badge';
          badge.setAttribute('data-i18n', '');
          badge.setAttribute('data-es', 'En Desarrollo');
          badge.setAttribute('data-en', 'In Progress');
          
          const lang = localStorage.getItem('emc-lang') || 'es';
          badge.textContent = lang === 'es' ? 'En Desarrollo' : 'In Progress';
          
          const imgContainer = card.querySelector('.project-image');
          if (imgContainer) {
            imgContainer.appendChild(badge);
          }
        }
        badge.style.display = 'flex';
      } else {
        if (badge) {
          badge.style.display = 'none';
        }
      }
    }
  });
});
