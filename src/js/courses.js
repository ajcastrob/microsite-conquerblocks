/**
 * Animaciones para el microsite.
 * - Intersection Observer con soporte escalonado (data-reveal-delay)
 * - Efecto touch en cards para móvil
 */

/**
 * Configura el Intersection Observer para animar elementos con [data-reveal].
 * Soporta data-reveal-delay="100/200/300/400/500" para escalonar hermanos.
 */
function setupRevealAnimation() {
  const observerOptions = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Pequeño delay extra si el elemento no tiene delay propio
        const delay = entry.target.getAttribute("data-reveal-delay") || "0";
        setTimeout(() => {
          entry.target.classList.add("active");
        }, parseInt(delay, 10));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll(
    "[data-reveal], .courses__card"
  );
  targets.forEach((target) => observer.observe(target));
}

/**
 * Efecto de escala en touch para cards (móvil).
 * Simula micro-interacción de "press".
 */
function setupTouchEffects() {
  const cards = document.querySelectorAll(".courses__card");

  cards.forEach((card) => {
    card.addEventListener("touchstart", () => {
      card.style.transform = "scale(0.98)";
      card.style.transition = "transform 0.15s ease-out";
    });

    card.addEventListener("touchend", () => {
      card.style.transform = "scale(1)";
    });
  });
}

/**
 * Inicializa todas las animaciones.
 */
export function initCourses() {
  setupRevealAnimation();
  setupTouchEffects();
}
