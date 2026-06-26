// ── Autenticación ──────────────────────────────────────────────
netlifyIdentity.on('init', user => {
  if (!user) window.location.href = '/index.html';
  else setupUI(user);
});

netlifyIdentity.on('logout', () => {
  window.location.href = '/index.html';
});

document.getElementById('btn-logout').addEventListener('click', () => {
  netlifyIdentity.logout();
});

// ── Setup inicial ───────────────────────────────────────────────
function setupUI(user) {
  const email = user.email || '';
  const initial = email.charAt(0).toUpperCase();
  document.getElementById('user-email').textContent = email;
  document.getElementById('user-avatar').textContent = initial;

  // Obtener roles del usuario (Netlify los guarda en app_metadata)
  const roles = user.app_metadata?.roles || [];
  buildSidebar(roles);
}

// ── Construir menú filtrado por rol ─────────────────────────────
function buildSidebar(userRoles) {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = '';

  const esAdmin = userRoles.includes('admin');

  // Filtrar solo las categorías que el usuario puede ver
  const categoriasVisibles = REPORTS_DATA.filter(group =>
    esAdmin || group.roles.some(r => userRoles.includes(r))
  );

  if (categoriasVisibles.length === 0) {
    nav.innerHTML = `
      <div style="padding:1.5rem 1.25rem;color:rgba(255,255,255,0.45);font-size:13px;line-height:1.5">
        No tienes reportes asignados.<br>Contacta al administrador.
      </div>`;
    return;
  }

  categoriasVisibles.forEach((group, index) => {
    const section = document.createElement('div');
    section.className = 'nav-section';

    const header = document.createElement('button');
    header.className = 'nav-category';
    header.innerHTML = `
      <span class="nav-category-label">
        <span class="nav-icon">${group.icon}</span>
        ${group.category}
      </span>
      <svg class="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>`;

    const list = document.createElement('ul');
    list.className = 'nav-reports';

    group.reports.forEach(report => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'nav-report-item';
      btn.textContent = report.name;
      btn.dataset.id = report.id;
      btn.dataset.category = group.category;
      btn.dataset.name = report.name;
      btn.dataset.url = report.url;
      btn.addEventListener('click', () => loadReport(btn));
      li.appendChild(btn);
      list.appendChild(li);
    });

    header.addEventListener('click', () => {
      const isOpen = section.classList.toggle('open');
      list.style.maxHeight = isOpen ? list.scrollHeight + 'px' : '0';
    });

    section.appendChild(header);
    section.appendChild(list);
    nav.appendChild(section);

    // Abrir primera categoría por defecto
    if (index === 0) {
      section.classList.add('open');
      list.style.maxHeight = list.scrollHeight + 'px';
    }
  });
}

// ── Cargar reporte ──────────────────────────────────────────────
function loadReport(btn) {
  document.querySelectorAll('.nav-report-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const { category, name, url } = btn.dataset;

  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('report-container').style.display = 'flex';
  document.getElementById('report-category').textContent = category;
  document.getElementById('report-title').textContent = name;
  document.getElementById('topbar-title').textContent = name;
  document.getElementById('report-iframe').src = url;

  closeSidebar();
}

// ── Mobile sidebar ──────────────────────────────────────────────
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

document.getElementById('btn-menu-toggle').addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
});

overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}