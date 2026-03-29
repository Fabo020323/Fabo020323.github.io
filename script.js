// Menú móvil (hamburguesa)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Cerrar menú al hacer click en un link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar transparente al hacer scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Para la animación de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos
document
  .querySelectorAll(".project-card, .skill-category, .timeline-item, .stat")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Sistema de cambio de idioma
const translations = {
  es: {
    heroTitle: "¡Hola! Soy",
    heroSubtitle: "Ingeniero Informático",
    heroDescription: "Desarrollador Full-Stack especializado en Backend | Python • C# • Java",
    btnProjects: "Ver Proyectos",
    btnContact: "Contacto",
    aboutTitle: "Sobre Mí",
    skillsTitle: "Habilidades Técnicas",
    experienceTitle: "Experiencia Profesional",
    projectsTitle: "Proyectos Destacados",
    contactTitle: "Contacto",
    contactIntro: "¿Tienes un proyecto en mente o quieres conversar? ¡Contáctame!",
    location: "Ubicación",
    years: "Años de Experiencia",
    projectsCompleted: "Proyectos Completados"
  },
  en: {
    heroTitle: "Hi! I'm",
    heroSubtitle: "Computer Engineer",
    heroDescription: "Full-Stack Developer specialized in Backend | Python • C# • Java",
    btnProjects: "View Projects",
    btnContact: "Contact",
    aboutTitle: "About Me",
    skillsTitle: "Technical Skills",
    experienceTitle: "Professional Experience",
    projectsTitle: "Featured Projects",
    contactTitle: "Contact",
    contactIntro: "Have a project in mind or want to chat? Contact me!",
    location: "Location",
    years: "Years of Experience",
    projectsCompleted: "Completed Projects"
  }
};

let currentLang = localStorage.getItem('language') || 'es';

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Actualizar elementos con data-es y data-en
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  
  // Actualizar botón de idioma
  const langToggle = document.getElementById('langToggle');
  if (lang === 'es') {
    langToggle.innerHTML = '<span class="lang-active">ES</span> | <span class="lang-inactive">EN</span>';
  } else {
    langToggle.innerHTML = '<span class="lang-inactive">ES</span> | <span class="lang-active">EN</span>';
  }
}

// Event listener para el botón de idioma
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  });
}

// Cargar idioma guardado al iniciar
if (currentLang === 'en') {
  changeLanguage('en');
}

console.log("Portfolio de Fabián Reyes cargado correctamente 🚀");
