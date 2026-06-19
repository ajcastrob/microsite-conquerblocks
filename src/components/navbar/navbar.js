import styles from "./navbar.css" with { type: "css" };

const REMIX_ICONS_URL =
  "https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css";

export class NavbarConquer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  async connectedCallback() {
    await this.loadRemixIcons();
    this.render();
    this.setupToggle();
    this.setActivePage();
    this.setupScrollEffect();
  }

  setActivePage() {
    const path = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll(".nav__link");

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && path.endsWith(href.replace("/microsite-conquerblocks", ""))) {
        link.classList.add("nav__link--active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  setupScrollEffect() {
    const updateScroll = () => {
      this.classList.toggle("nav--scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
  }

  async loadRemixIcons() {
    try {
      const response = await fetch(REMIX_ICONS_URL);
      const cssText = await response.text();
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssText);
      this.shadowRoot.adoptedStyleSheets.push(sheet);
    } catch (error) {
      console.warn("No se pudieron cargar los Remix Icons:", error);
    }
  }

  setupToggle() {
    const toggle = this.shadowRoot.getElementById("nav-toggle");
    const menu = this.shadowRoot.getElementById("nav-menu");
    const nav = this.shadowRoot.querySelector(".nav");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("show-menu");
        nav.classList.toggle("show-icon");
        toggle.setAttribute("aria-expanded", isOpen);
        toggle.setAttribute(
          "aria-label",
          isOpen ? "Cerrar menú" : "Abrir menú"
        );
      });

      // Cerrar menu al hacer click en un link
      const links = menu.querySelectorAll(".nav__link");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.remove("show-menu");
          nav.classList.remove("show-icon");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Abrir menú");
        });
      });
    }
  }

  render() {
    const html = /*html*/ `
    <nav class="nav container">
      <div class="nav__data">
        <a href="#" class="nav__logo">
          <span class="nav__logo-text">
            <span class="nav__logo-conquer">CONQUER</span>
            <span class="nav__logo-blocks">BLOCKS</span>
          </span>
        </a>

        <button class="nav__toogle" id="nav-toggle" aria-label="Abrir menú" aria-controls="nav-menu">
          <i class="ri-menu-line nav__burger" aria-hidden="true"></i>
          <i class="ri-close-line nav__close" aria-hidden="true"></i>
        </button>
      </div>

      <nav class="nav__menu" id="nav-menu" role="navigation" aria-label="Navegación principal">
        <ul class="nav__menu-ul">
          <li>
            <a href="/microsite-conquerblocks/index.html" class="nav__link">Inicio</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/somos.html" class="nav__link">Somos</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/cursos.html" class="nav__link">Cursos</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/blog.html" class="nav__link">Blog</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/registro.html" class="nav__link">Registro</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/login.html" class="nav__link">Login</a>
          </li>
          <li>
            <a href="/microsite-conquerblocks/pages/contacto.html" class="nav__link">Contacto</a>
          </li>
        </ul>
      </nav>
    </nav>
    `;

    this.shadowRoot.setHTMLUnsafe(html);
  }
}
