const PROJECTS_URL = './assets/data/projects.json';


function createProjectCard(project) {
  const tags = project.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join(' ');

  return `
    <article class="card" data-category="${project.category}" role="article" aria-label="${project.title}">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
        <span class="tag">${project.category}</span>
        <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-muted)">${project.year}</span>
      </div>
      <h3 style="margin-bottom:0.5rem">${project.title}</h3>
      <p style="font-size:0.9rem;margin-bottom:1rem">${project.description}</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1.25rem">${tags}</div>
      <div style="display:flex;gap:0.75rem">
        <a href="${project.repo}" class="btn btn-outline" style="font-size:0.825rem;padding:0.4rem 0.9rem" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Repo
        </a>
        <a href="${project.demo}" class="btn btn-primary" style="font-size:0.825rem;padding:0.4rem 0.9rem">
          Live Demo →
        </a>
      </div>
    </article>
  `;
}

function filterProjects(category) {
  const cards = document.querySelectorAll('#projects-grid [data-category]');
  cards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.classList.toggle('btn-primary', btn.dataset.filter === category);
    btn.classList.toggle('btn-outline', btn.dataset.filter !== category);
  });
}

function packageNewProject(fields) {
  const project = {
    id: Date.now(),
    title: fields.title || 'Thomas Portfolio',
    description: fields.description || '',
    tags: fields.tags ? fields.tags.split(',').map(t => t.trim()) : [],
    category: fields.category || 'other',
    year: new Date().getFullYear().toString(),
    repo: fields.repo || '',
    demo: fields.demo || ''
  };
  console.log('[Portfolio] New project JSON:', JSON.stringify(project, null, 2));
  return project;
}

/**
 * Main init — fetches projects and builds the grid.
 */
async function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  try {
    const res = await fetch(PROJECTS_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const projects = await res.json();

    grid.innerHTML = projects.map(createProjectCard).join('');

    // Attach filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => filterProjects(btn.dataset.filter));
    });

  } catch (err) {
    grid.innerHTML = `<p style="color:var(--color-text-muted)">Could not load projects. ${err.message}</p>`;
    console.error('[Portfolio] Projects fetch error:', err);
  }
}

export { initProjects, filterProjects, packageNewProject };
