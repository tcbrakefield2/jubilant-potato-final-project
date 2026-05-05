<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Thomas Brakefield — IT &amp; general technology professional." />
  <!-- TODO: Update the <title> with your full name -->
  <title>Thomas Brakefield — Portfolio</title>
  <link rel="stylesheet" href="assets/styles/base.css" />
  <style>
    [data-theme="dark"] {
      --color-bg: #111110;
      --color-surface: #1a1a18;
      --color-border: #2a2a27;
      --color-text-primary: #f0efeb;
      --color-text-secondary: #9a9994;
      --color-text-muted: #5a5a56;
      --color-accent: #7ab88a;
      --color-accent-light: #1a2e1f;
      --color-accent-hover: #9dcfab;
    }

    #hero {
      padding: calc(var(--space-2xl) + 60px) 0 var(--space-2xl);
      border-top: none;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-accent);
      margin-bottom: var(--space-sm);
    }

    .hero-eyebrow::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 1px;
      background: var(--color-accent);
    }

    .hero-title { margin-bottom: var(--space-sm); }

    .hero-subtitle {
      font-size: 1.1rem;
      max-width: 520px;
      margin-bottom: var(--space-lg);
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xl);
      align-items: start;
    }

    .about-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: var(--color-accent-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--color-accent);
      margin-bottom: var(--space-md);
    }

    .about-facts { list-style: none; margin-top: var(--space-md); }

    .about-facts li {
      display: flex;
      gap: 0.75rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid var(--color-border);
      font-size: 0.9rem;
    }

    .about-facts li:last-child { border-bottom: none; }
    .fact-label { font-weight: 500; min-width: 90px; color: var(--color-text-primary); }
    .fact-value { color: var(--color-text-secondary); }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-lg);
    }

    .skills-category {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      margin-bottom: var(--space-sm);
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border);
    }

    .filter-bar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: var(--space-lg);
    }

    #projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-md);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--space-xl);
      align-items: start;
    }

    .contact-info-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--color-border);
    }

    .contact-info-item:last-child { border-bottom: none; }

    .contact-icon {
      width: 36px;
      height: 36px;
      background: var(--color-accent-light);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-icon svg { width: 16px; height: 16px; stroke: var(--color-accent); }

    .fade-in {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 600ms ease, transform 600ms ease;
    }

    footer {
      border-top: 1px solid var(--color-border);
      padding: var(--space-lg) 0;
      text-align: center;
    }

    footer p { font-size: 0.85rem; }

    #theme-btn {
      background: none;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 0.35rem 0.6rem;
      cursor: pointer;
      color: var(--color-text-secondary);
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: all var(--transition);
    }

    #theme-btn:hover {
      border-color: var(--color-text-muted);
      color: var(--color-text-primary);
    }

    .resume-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-sm) var(--space-md);
      background: var(--color-accent-light);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-lg);
      gap: var(--space-sm);
      flex-wrap: wrap;
    }

    .resume-banner p { color: var(--color-accent); font-size: 0.9rem; margin: 0; }

    @media (max-width: 640px) {
      .about-grid,
      .contact-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <!-- TODO: Replace "TB.dev" with your own initials or short handle -->
    <a href="#hero" class="nav-logo">TB.dev</a>
    <ul class="nav-links" id="nav-links" role="list">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div style="display:flex;align-items:center;gap:0.75rem">
      <button id="theme-btn" aria-label="Toggle dark mode">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        Theme
      </button>
      <button id="menu-btn" class="nav-menu-btn" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>

<section id="hero">
  <div class="container">
    <!-- TODO: Change "Available for opportunities" to whatever status fits you (e.g. "Open to internships") -->
    <div class="hero-eyebrow">Available for opportunities</div>
    <!-- TODO: Replace with your actual first name -->
    <h1 class="hero-title">Hi, I'm <span style="color:var(--color-accent)">Thomas</span>.</h1>
    <!-- TODO: Rewrite this 1–2 sentence intro in your own voice -->
    <p class="hero-subtitle">IT professional and student at UNA. I build reliable tech solutions, troubleshoot systems, and explore everything at the intersection of networks, software, and people.</p>
    <div class="hero-cta">
      <a href="#projects" class="btn btn-primary">View my work →</a>
      <a href="#contact" class="btn btn-outline">Get in touch</a>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <p class="section-label">About me</p>
    <div class="about-grid">
      <div class="fade-in">
        <!-- TODO: Change "TB" to your actual initials -->
        <div class="about-avatar" aria-hidden="true">TB</div>
        <h2>Background</h2>
        <!-- TODO: Rewrite both paragraphs — year in program, university name, focus areas -->
        <p style="margin-top:var(--space-sm)">
          I'm a junior studying General Technology / IT at the University of North Alabama.
          My focus is on practical systems — from configuring networks and managing servers
          to building web tools that solve real problems.
        </p>
        <p style="margin-top:var(--space-sm)">
          I enjoy learning by building, and this portfolio reflects projects I've completed
          through coursework and independent study.
        </p>
      </div>
      <div class="fade-in">
        <ul class="about-facts" aria-label="Quick facts">
          <li>
            <span class="fact-label">Location</span>
            <!-- TODO: Update city/state if needed -->
            <span class="fact-value">Florence, Alabama</span>
          </li>
          <li>
            <span class="fact-label">Program</span>
            <span class="fact-value">General Technology / IT</span>
          </li>
          <li>
            <span class="fact-label">University</span>
            <!-- TODO: Replace with your university's full name -->
            <span class="fact-value">University of North Alabama</span>
          </li>
          <li>
            <span class="fact-label">Graduating</span>
            <!-- TODO: Replace with your expected graduation year -->
            <span class="fact-value">2026</span>
          </li>
          <li>
            <span class="fact-label">Interests</span>
            <!-- TODO: List your actual interests/focus areas -->
            <span class="fact-value">Networking, Web Dev, IT Support</span>
          </li>
          <li>
            <span class="fact-label">GitHub</span>
            <span class="fact-value"><a href="https://github.com/tcbrakefield2" target="_blank" rel="noopener">@tcbrakefield2</a></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="skills">
  <div class="container">
    <p class="section-label">Skills</p>
    <h2 style="margin-bottom:var(--space-lg)">What I work with</h2>
    <div class="skills-grid">

      <div class="fade-in">
        <p class="skills-category">Technical</p>
        <!-- TODO: Adjust skill names and percentages (width) to match your real proficiency -->
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">HTML &amp; CSS</span>
            <span class="skill-level">Advanced</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:88%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">JavaScript</span>
            <span class="skill-level">Intermediate</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:72%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Networking (TCP/IP)</span>
            <span class="skill-level">Intermediate</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:68%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Linux / CLI</span>
            <span class="skill-level">Intermediate</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:65%"></div></div>
        </div>
      </div>

      <div class="fade-in">
        <p class="skills-category">Tools &amp; Platforms</p>
        <!-- TODO: Add or remove tools to match what you actually use -->
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Git &amp; GitHub</span>
            <span class="skill-level">Intermediate</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:75%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Bootstrap</span>
            <span class="skill-level">Advanced</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:82%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Google Cloud (GCP)</span>
            <span class="skill-level">Beginner</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:45%"></div></div>
        </div>
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">nginx</span>
            <span class="skill-level">Beginner</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:40%"></div></div>
        </div>
      </div>

      <div class="fade-in">
        <p class="skills-category">Other</p>
        <!-- TODO: Update these tags to match your actual soft skills and certifications -->
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.5rem">
          <span class="tag">Technical Writing</span>
          <span class="tag">IT Support</span>
          <span class="tag">Accessibility (WCAG)</span>
          <span class="tag">Troubleshooting</span>
          <span class="tag">Documentation</span>
          <span class="tag">Agile Basics</span>
          <span class="tag">Problem Solving</span>
          <span class="tag">Communication</span>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="projects">
  <div class="container">
    <p class="section-label">Projects</p>
    <h2 style="margin-bottom:var(--space-sm)">Things I've built</h2>
    <p style="margin-bottom:var(--space-lg);max-width:480px">A selection of coursework and personal projects. Click Repo to see source, Live Demo to try it.</p>

    <div class="filter-bar" role="group" aria-label="Filter projects by category">
      <button class="btn btn-primary" data-filter="all">All</button>
      <button class="btn btn-outline" data-filter="network">Network</button>
      <button class="btn btn-outline" data-filter="tools">Tools</button>
      <button class="btn btn-outline" data-filter="design">Design</button>
    </div>

    <div id="projects-grid" aria-live="polite" aria-label="Project cards">
      <p style="color:var(--color-text-muted)">Loading projects…</p>
    </div>
  </div>
</section>

<section id="resume">
  <div class="container">
    <p class="section-label">Resume</p>
    <h2 style="margin-bottom:var(--space-md)">Experience &amp; Education</h2>

    <div class="resume-banner fade-in">
      <p>Want the full PDF? Download my resume below.</p>
      <!-- TODO: Add your actual resume PDF as docs/resume.pdf in the repo -->
      <a href="docs/resume.pdf" class="btn btn-primary" download>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download PDF
      </a>
    </div>

    <h3 style="margin-bottom:var(--space-sm);color:var(--color-text-muted);font-size:0.875rem;font-family:var(--font-mono);font-weight:400;letter-spacing:0.06em;text-transform:uppercase">Education</h3>
    <div style="margin-bottom:var(--space-lg)">
      <div class="timeline-item fade-in">
        <!-- TODO: Update dates to your actual enrollment range -->
        <span class="timeline-date">2022 – Present</span>
        <div>
          <!-- TODO: Replace with your university name -->
          <p class="timeline-title">University of North Alabama</p>
          <p class="timeline-sub">B.S. in General Technology / Information Technology</p>
          <!-- TODO: Customize this description with your actual coursework highlights -->
          <p class="timeline-desc">Coursework in web development, networking, IT support, cloud infrastructure, and systems administration.</p>
        </div>
      </div>
    </div>

    <h3 style="margin-bottom:var(--space-sm);color:var(--color-text-muted);font-size:0.875rem;font-family:var(--font-mono);font-weight:400;letter-spacing:0.06em;text-transform:uppercase">Experience</h3>
    <div>
      <!-- TODO: Fill in each timeline-item with a real job/internship. Add or remove items as needed. -->
      <div class="timeline-item fade-in">
        <span class="timeline-date">2023 – Present</span>
        <div>
          <p class="timeline-title">IT Student Assistant</p>
          <!-- TODO: Replace with the actual organization name -->
          <p class="timeline-sub">[Organization / Employer]</p>
          <!-- TODO: Write 1–2 sentences about what you actually did -->
          <p class="timeline-desc">Provided tier-1 technical support, managed hardware inventory, and assisted with network troubleshooting for faculty and staff.</p>
        </div>
      </div>
      <div class="timeline-item fade-in">
        <!-- TODO: Replace dates, title, company, and description with your second experience — or delete this block if not applicable -->
        <span class="timeline-date">Summer 2023</span>
        <div>
          <p class="timeline-title">Help Desk Intern</p>
          <p class="timeline-sub">[Company Name]</p>
          <p class="timeline-desc">Resolved support tickets, documented common issues in the knowledge base, and escalated complex cases to senior technicians.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <p class="section-label">Contact</p>
    <h2 style="margin-bottom:var(--space-lg)">Get in touch</h2>

    <div class="contact-grid">
      <div>
        <p style="margin-bottom:var(--space-md)">Whether it's a job opportunity, a project question, or just a hello — I'm happy to hear from you.</p>

        <div class="contact-info-item">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <p style="font-size:0.8rem;color:var(--color-text-muted);margin:0">Email</p>
            <!-- TODO: Replace with your actual email address -->
            <a href="mailto:tcbrakefield2@una.edu" style="font-size:0.9rem">tcbrakefield2@una.edu</a>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </div>
          <div>
            <p style="font-size:0.8rem;color:var(--color-text-muted);margin:0">GitHub</p>
            <a href="https://github.com/tcbrakefield2" target="_blank" rel="noopener" style="font-size:0.9rem">@tcbrakefield2</a>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div>
            <p style="font-size:0.8rem;color:var(--color-text-muted);margin:0">LinkedIn</p>
            <!-- TODO: Replace with your actual LinkedIn profile URL and handle -->
            <a href="https://linkedin.com/in/tcbrakefield2" target="_blank" rel="noopener" style="font-size:0.9rem">linkedin.com/in/tcbrakefield2</a>
          </div>
        </div>
      </div>

      <div>
        <div id="form-success" class="form-success" role="alert">
          Thanks for reaching out! Your message has been received.
        </div>

        <form id="contact-form" novalidate aria-label="Contact form">
          <div class="form-group">
            <label for="name">Name <span aria-hidden="true">*</span></label>
            <input type="text" id="name" name="name" autocomplete="name" placeholder="Jane Smith" />
            <span class="form-error" id="name-error" role="alert">Please enter your name.</span>
          </div>

          <div class="form-group">
            <label for="email">Email <span aria-hidden="true">*</span></label>
            <input type="email" id="email" name="email" autocomplete="email" placeholder="jane@example.com" />
            <span class="form-error" id="email-error" role="alert">Please enter a valid email address.</span>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Job opportunity / project question / etc." />
          </div>

          <div class="form-group">
            <label for="message">Message <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" placeholder="Say hello…"></textarea>
            <span class="form-error" id="message-error" role="alert">Please enter a message.</span>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">
            Send message →
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer role="contentinfo">
  <div class="container">
    <!-- TODO: Update Nu Validator and WAVE links once deployed (run validator on your live GitHub Pages URL) -->
    <p>Built by <a href="https://github.com/tcbrakefield2" target="_blank" rel="noopener">Thomas Brakefield</a> · <span id="footer-year"></span> · Validated with <a href="#" target="_blank" rel="noopener">Nu Validator</a> &amp; <a href="#" target="_blank" rel="noopener">WAVE</a></p>
  </div>
</footer>

<div id="toast" role="status" aria-live="polite"></div>

<script>
  document.getElementById('footer-year').textContent = new Date().getFullYear();
</script>
<script type="module" src="assets/scripts/main.js"></script>
</body>
</html>
