// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);
themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});
function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ABOUT CARDS =====
const aboutGrid = document.querySelector('.about-grid');
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.about-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('animate-in'), i * 150);
      });
      aboutObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
if (aboutGrid) aboutObserver.observe(aboutGrid);

// ===== TECH SKILL CARDS =====
const techGrid = document.querySelector('.tech-skills-grid');
const techObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.tech-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('animate-in'), i * 150);
      });
      techObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
if (techGrid) techObserver.observe(techGrid);

// ===== SOFT SKILLS =====
const softSkillsGrid = document.querySelector('.soft-skills-grid');
const softObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.soft-skill-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('animate-in'), i * 100);
      });
      softObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
if (softSkillsGrid) softObserver.observe(softSkillsGrid);

// ===== SKILL BARS =====
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;
const skillsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !skillsAnimated) {
    skillsAnimated = true;
    document.querySelectorAll('.skill-item').forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('animate-in');
        const bar = item.querySelector('.skill-fill');
        if (bar) {
          bar.style.width = bar.getAttribute('data-width') + '%';
          setTimeout(() => bar.classList.add('filled'), 1200);
        }
      }, i * 200);
    });
  }
}, { threshold: 0.2 });
if (skillsSection) skillsObserver.observe(skillsSection);

// ===== SCROLL REVEALS =====
const revealItems = document.querySelectorAll('.timeline-card, .achievement-card, .contact-card, .project-card');
revealItems.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealItems.forEach(el => observer.observe(el));

// ===== PROJECT CARDS =====
const projectsGrid = document.querySelector('.projects-grid');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.project-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('animate-in'), i * 200);
      });
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
if (projectsGrid) projectObserver.observe(projectsGrid);

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
  });
  navItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) link.style.color = 'var(--primary)';
  });
});
