/**
 * Animaciones para la sección de Cursos.
 * Activa las cards cuando entran en el viewport usando Intersection Observer.
 */

/**
 * Configura el Intersection Observer para animar las cards al hacer scroll.
 * Cada card empieza con opacity:0 y translateY(20px) en CSS.
 * Cuando entra en el viewport, se agrega la clase 'active' que la hace visible.
 */
function setupRevealAnimation() {
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(".courses__card");
  cards.forEach((card) => observer.observe(card));
}

/**
 * Agrega efecto de escala en touch para cards (móvil).
 * Simula una micro-interacción de "press" al tocar la card.
 */
function setupTouchEffects() {
  const cards = document.querySelectorAll(".courses__card");

  cards.forEach((card) => {
    card.addEventListener("touchstart", () => {
      card.style.transform = "scale(0.98)";
      card.style.transition = "transform 0.2s";
    });

    card.addEventListener("touchend", () => {
      card.style.transform = "scale(1)";
    });
  });
}

/**
 * Inicializa todas las animaciones de la sección de cursos.
 * Se ejecuta cuando el DOM está listo.
 */
export function initCourses() {
  setupRevealAnimation();
  setupTouchEffects();
}
