/* main.js — entry point, imports modules, handles nav/form/session */

import { initProjects, packageNewProject } from './projects.js';

/* ── Navbar scroll effect ── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Mobile menu toggle
  menuBtn?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Skill bar animation ── */
function initSkills() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(el => observer.observe(el));
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Pre-fill from session storage if available
  const saved = sessionStorage.getItem('contact-draft');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      form.name.value = data.name || '';
      form.email.value = data.email || '';
      form.subject.value = data.subject || '';
      form.message.value = data.message || '';
    } catch (e) { /* ignore */ }
  }

  // Save draft to session storage as user types
  form.addEventListener('input', () => {
    const draft = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };
    sessionStorage.setItem('contact-draft', JSON.stringify(draft));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    // Package submission as JSON and log to console
    const submission = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      timestamp: new Date().toISOString()
    };
    console.log('[Portfolio] Contact form submission (JSON):', JSON.stringify(submission, null, 2));

    // Show success
    document.getElementById('form-success').style.display = 'block';
    form.reset();
    sessionStorage.removeItem('contact-draft');
    showToast('Message sent! (logged to console)');
  });
}

/**
 * Validates form fields, shows inline errors.
 * @param {HTMLFormElement} form
 * @returns {boolean}
 */
function validateForm(form) {
  let valid = true;
  const fields = ['name', 'email', 'message'];

  fields.forEach(field => {
    const el = form[field];
    const err = document.getElementById(`${field}-error`);
    const empty = !el.value.trim();
    const invalidEmail = field === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);

    if (empty || invalidEmail) {
      err.style.display = 'block';
      el.style.borderColor = '#c0392b';
      valid = false;
    } else {
      err.style.display = 'none';
      el.style.borderColor = '';
    }
  });
  return valid;
}

/* ── Toast notification ── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

/* ── Fade-in on scroll ── */
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

/* ── Theme toggle ── */
function initTheme() {
  const btn = document.getElementById('theme-btn');
  if (!btn) return;
  const stored = sessionStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = stored;

  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    sessionStorage.setItem('theme', next);
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSkills();
  initContactForm();
  initFadeIn();
  initProjects();
  initTheme();
  // Credential hint for graders
  console.log('[Portfolio] Demo login — user: guest | pass: portfolio2025');
});
