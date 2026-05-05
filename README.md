# Thomas Brakefield — Portfolio

> A clean, minimal IT portfolio showcasing projects, skills, and experience built for the web.

**Author:** Thomas Brakefield · [github.com/tcbrakefield2](https://github.com/tcbrakefield2)

---

## User Story

- *As a* hiring manager or recruiter
- *I want* to quickly see Thomas's skills, projects, and contact info
- *So that* I can evaluate whether he's a good fit for an IT role or internship

---

## Narrative

This portfolio was built as the final project for my web development course. I chose to build a personal portfolio because it's something I'll actually use after the class ends — a real, deployable site that represents my work.

The app is a single-page design with five sections: About, Skills, Projects, Resume, and Contact. Projects are loaded dynamically from a JSON file using the Fetch API, with client-side category filtering. The contact form saves drafts to session storage so users don't lose their input. A light/dark theme toggle persists the user's preference across the session.

I focused on clean structure, accessible markup, and code that's easy to maintain and extend.

---

## Attribution

| Resource | Use |
|---|---|
| [DM Sans + DM Mono](https://fonts.google.com/) | Typography via Google Fonts |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | SVG icon references |
| Claude (Anthropic) | Assisted with initial scaffolding and structure |

---

## Project Structure

```
portfolio/
├── index.html
├── assets/
│   ├── styles/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── nav.css
│   ├── scripts/
│   │   ├── main.js
│   │   └── projects.js
│   └── data/
│       └── projects.json
└── docs/
    └── resume.pdf
```

---

## Code Highlight

**File:** `assets/scripts/projects.js`

```js
async function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  try {
    const res = await fetch('./assets/data/projects.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const projects = await res.json();
    grid.innerHTML = projects.map(createProjectCard).join('');
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => filterProjects(btn.dataset.filter));
    });
  } catch (err) {
    grid.innerHTML = `<p>Could not load projects. ${err.message}</p>`;
  }
}
```

**What it does:** Fetches project data from a local JSON file and renders it as HTML cards.

**Why it matters:** Separating content (JSON) from presentation (HTML) makes it trivial to add new projects — just update the JSON file, no HTML edits needed. It also demonstrates the Fetch API, async/await, error handling, and dynamic DOM construction in one function.

**How it works:** The function uses `fetch()` to request the JSON, checks the HTTP status before parsing, maps each project object through `createProjectCard()` to produce HTML strings, then injects them into the grid in a single `innerHTML` assignment for performance. Filter buttons are wired up immediately after so they work on the freshly rendered cards.

---

## Validation

<!-- TODO: Run these after deploying to GitHub Pages and paste the result URLs -->
- **Nu HTML Validator:** [Add link after deployment]
- **WAVE Accessibility:** [Add link after deployment]

---

## Future Improvements

👉 [Sprint 99 Milestone](https://github.com/tcbrakefield2/jubilant-potato-final-project/milestone/1)

Issues include:
- Add a working backend for contact form email delivery
- Add a blog/notes section
- Improve mobile layout for the resume timeline
- Add project screenshots / thumbnails to cards
- Add a "copy email" button to the contact section
