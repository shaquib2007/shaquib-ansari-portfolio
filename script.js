const topbar = document.querySelector('.topbar');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

if (topbar) {
  const syncHeaderState = () => topbar.classList.toggle('is-scrolled', window.scrollY > 12);
  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const projectData = [
  {
    id: 'neet', number: '01', name: 'NEET Strategy Dashboard', status: 'PUBLIC', date: '2026', category: 'AI / ML',
    description: 'A static study-planning dashboard with overview, chapter tracking, roadmap access, 31-day scheduling, daily study tracking, performance analytics, LocalStorage persistence, and PDF strategy access.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'PDF workflow'], githubVisibility: 'public',
    githubUrl: 'https://github.com/shaquib2007/neet', liveUrl: 'https://neet-self.vercel.app', visualType: 'dashboard', variant: 'project-featured',
    projectStatus: 'Public repository · Live deployment available'
  },
  {
    id: 'jarvis', number: '02', name: 'Jarvis Agent — macOS', status: 'PRIVATE', date: '2026', category: 'AI / ML',
    description: 'A cross-platform desktop assistant with a React interface, Tauri/Rust host process, embedded Python agentic backend, and a LangGraph ReAct loop connected to LangChain tools.',
    technologies: ['Python', 'LangChain', 'LangGraph', 'React', 'Tauri', 'Rust', 'Groq API'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'assistant', variant: 'project-code',
    projectStatus: 'Private repository · Source code kept private'
  },
  {
    id: 'prompt-generator', number: '03', name: 'Prompt Generator', status: 'PRIVATE', date: '2026', category: 'AI / ML',
    description: 'An AI-powered prompt enhancement platform with a FastAPI backend, React frontend, authentication, protected enhancement endpoint, async database access, Redis rate limiting, and provider routing.',
    technologies: ['Python', 'FastAPI', 'React', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Claude/Gemini APIs'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'prompt', variant: 'project-code',
    projectStatus: 'Private repository · Source code kept private'
  },
  {
    id: 'video-player', number: '04', name: 'Video Player for macOS', status: 'PRIVATE', date: 'JUN 2026', category: 'DESKTOP',
    description: 'A native desktop media library and player for local video and audio files with library scanning, libmpv playback, playlists, settings, drag-and-drop, keyboard shortcuts, and subtitle/OSD workflows.',
    technologies: ['Tauri v2', 'Rust', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'media', variant: 'project-foundation',
    projectStatus: 'Private repository · Source code kept private'
  },
  {
    id: 'esp32-robot', number: '05', name: 'ESP32 Remote Robot Car Control', status: 'PRIVATE', date: 'MAY 2026', category: 'HARDWARE',
    description: 'An ESP32 async web server project for remotely controlling two LEDs, with local Wokwi simulation and optional public access through an ngrok tunnel.',
    technologies: ['C++', 'ESP32', 'Arduino', 'PlatformIO', 'Wokwi', 'ngrok', 'Python'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'hardware', variant: 'project-hardware',
    projectStatus: 'Private repository · Source code kept private'
  },
  {
    id: 'cultivanova', number: '06', name: 'CultivaNova', status: 'PRIVATE', date: 'FEB 2026', category: 'WEB',
    description: 'A React and Vite web app focused on sustainable agriculture, with crop planning, resource management, government initiatives, success stories, and supporting soil and water tools.',
    technologies: ['JavaScript', 'React', 'Vite', 'React Router', 'LocalStorage', 'Framer Motion', 'Recharts'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'agri', variant: 'project-private',
    projectStatus: 'Private repository · Source code kept private'
  },
  {
    id: 'remotion', number: '07', name: 'Remotion / WhyVerse', status: 'PRIVATE', date: 'JUL 2026', category: 'DESKTOP',
    description: 'A TypeScript and React Remotion project for documentary-style video composition, with WhyVerse scenes and reusable camera, editorial, text-motion, transition, and scene-template demos.',
    technologies: ['TypeScript', 'React', 'Remotion'], githubVisibility: 'private',
    githubUrl: null, liveUrl: null, visualType: 'motion', variant: 'project-private',
    projectStatus: 'Private repository · Source code kept private'
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));

const visualMarkup = (type) => {
  if (type === 'dashboard') return '<div class="project-visual visual-grid"><span class="visual-line"></span><span class="visual-line"></span><span class="visual-orb"></span><span class="visual-grid-label">PLAN / TRACK / REVIEW</span></div>';
  if (type === 'assistant') return '<div class="code-art"><span>JARVIS</span> <b>→</b> <i>tool loop</i><br /><span>REACT</span> / <i>TAURI</i> / <i>PYTHON</i><br /><br /><b>stream</b>(<i>events</i>)</div>';
  if (type === 'prompt') return '<div class="code-art"><span>PROMPT</span> <b>→</b> <i>enhance</i><br /><b>context</b> + <i>intent</i><br /><br /><span>OUTPUT</span> <b>ready</b></div>';
  if (type === 'media') return '<div class="media-art"><span class="media-play">▶</span><span class="media-bar bar-one"></span><span class="media-bar bar-two"></span><span class="media-bar bar-three"></span><span class="media-time">00:42 / 04:18</span></div>';
  if (type === 'hardware') return '<div class="hardware-art"><span class="hardware-node node-one">ESP32</span><span class="hardware-node node-two">LED 1</span><span class="hardware-node node-three">LED 2</span><span class="hardware-wire wire-one"></span><span class="hardware-wire wire-two"></span></div>';
  if (type === 'agri') return '<div class="agri-art"><span class="agri-sun">＋</span><span class="agri-field field-one"></span><span class="agri-field field-two"></span><span class="agri-field field-three"></span><span class="agri-label">DATA / SOIL / WATER</span></div>';
  return '<div class="motion-art"><span class="motion-play">▶</span><span class="motion-track track-one"></span><span class="motion-track track-two"></span><span class="motion-track track-three"></span><span class="motion-label">SCENE / CUT / TRANSITION</span></div>';
};

const actionMarkup = (project) => {
  if (project.githubVisibility === 'public') {
    return `<div class="project-actions project-foot"><a href="${project.githubUrl}" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">LIVE <span>↗</span></a>` : ''}<button class="project-detail-trigger" type="button" data-project-id="${project.id}">DETAILS <span>＋</span></button></div>`;
  }
  return `<button class="project-private-action project-foot" type="button" data-project-id="${project.id}" aria-label="Open details for private project ${escapeHtml(project.name)}">PRIVATE GITHUB <span>↗</span></button>`;
};

const renderProjectCard = (project, compact = false) => `<article class="project-card ${project.variant}${compact ? ' project-additional-card' : ''} reveal" data-project-id="${project.id}" tabindex="0">
  <div class="card-top"><span class="project-index">${project.number}</span><span class="tag">${project.status} · ${project.date}</span></div>
  ${visualMarkup(project.visualType)}
  <div class="project-card-copy"><span class="project-category">${project.category}</span><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)}</p></div>
  <div class="project-tags">${project.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join('')}</div>
  ${actionMarkup(project)}
</article>`;

const mainProjectsGrid = document.querySelector('#projects-main-grid');
const additionalProjectsGrid = document.querySelector('#projects-additional-grid');
const additionalProjects = document.querySelector('.projects-additional');
const projectFilters = document.querySelectorAll('.project-filter');
let revealObserver;

const observeRenderedReveals = () => {
  if (!revealObserver) return;
  document.querySelectorAll('#projects .reveal:not(.visible)').forEach((element) => revealObserver.observe(element));
};

const renderProjects = (filter = 'all') => {
  if (!mainProjectsGrid || !additionalProjectsGrid) return;
  const visibleProjects = filter === 'all' ? projectData : projectData.filter((project) => project.category === filter);
  const showContinuation = filter === 'all';
  mainProjectsGrid.classList.toggle('is-filtered', !showContinuation);
  mainProjectsGrid.innerHTML = visibleProjects.slice(0, showContinuation ? 4 : visibleProjects.length).map((project) => renderProjectCard(project)).join('');
  additionalProjectsGrid.innerHTML = showContinuation ? projectData.slice(4).map((project) => renderProjectCard(project, true)).join('') : '';
  additionalProjects?.classList.toggle('is-filtered', !showContinuation);
  observeRenderedReveals();
};

renderProjects();

projectFilters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const filter = filterButton.dataset.projectFilter || 'all';
    projectFilters.forEach((button) => {
      const isActive = button === filterButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    renderProjects(filter);
  });
});

const projectModal = document.querySelector('#project-modal');
const projectModalPanel = document.querySelector('.project-modal-panel');
const projectModalMeta = document.querySelector('#project-modal-meta');
const projectModalTitle = document.querySelector('#project-modal-title');
const projectModalDescription = document.querySelector('#project-modal-description');
const projectModalTech = document.querySelector('#project-modal-tech');
const projectModalStatus = document.querySelector('#project-modal-status');
const projectModalActions = document.querySelector('#project-modal-actions');
let lastProjectFocus = null;

const closeProjectModal = () => {
  if (!projectModal) return;
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastProjectFocus) lastProjectFocus.focus();
};

const openProjectModal = (projectId) => {
  const project = projectData.find((item) => item.id === projectId);
  if (!project || !projectModal) return;
  lastProjectFocus = document.activeElement;
  projectModalMeta.textContent = `${project.status} REPOSITORY · ${project.date}`;
  projectModalTitle.textContent = project.name;
  projectModalDescription.textContent = project.description;
  projectModalTech.innerHTML = project.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join('');
  projectModalStatus.textContent = project.projectStatus;
  projectModalActions.innerHTML = project.githubVisibility === 'public'
    ? `<a class="button button-dark" href="${project.githubUrl}" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>${project.liveUrl ? `<a class="button button-light" href="${project.liveUrl}" target="_blank" rel="noreferrer">LIVE <span>↗</span></a>` : ''}`
    : '<span class="modal-private-badge">PRIVATE GITHUB · SOURCE NOT PUBLIC</span>';
  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  projectModalPanel.focus();
};

const projectsSection = document.querySelector('#projects');
projectsSection?.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-id]');
  if (trigger && (trigger.classList.contains('project-detail-trigger') || trigger.classList.contains('project-private-action'))) {
    event.stopPropagation();
    openProjectModal(trigger.dataset.projectId);
    return;
  }
  if (event.target.closest('[data-close-project]')) closeProjectModal();
  const card = event.target.closest('.project-card');
  if (card && !event.target.closest('a, button')) openProjectModal(card.dataset.projectId);
});

projectsSection?.addEventListener('keydown', (event) => {
  const card = event.target.closest('.project-card');
  if (card && (event.key === 'Enter' || event.key === ' ') && !event.target.closest('a, button')) {
    event.preventDefault();
    openProjectModal(card.dataset.projectId);
  }
});

document.addEventListener('keydown', (event) => {
  if (!projectModal?.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeProjectModal();
  if (event.key === 'Tab') {
    const focusable = projectModalPanel.querySelectorAll('button, a[href]');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));

revealObserver = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerInstance.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
