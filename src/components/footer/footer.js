import styles from "./footer.css" with { type: "css" };

export class FooterConquer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  async connectedCallback() {
    this.render();
  }

  render() {
    const html = /*html*/ `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand">
          <a href="/microsite-conquerblocks/" class="footer__logo">
            <span class="footer__logo-cb">CONQUER</span>
            <span class="footer__logo-blocks">BLOCKS</span>
          </a>
          <p class="footer__desc">Formación tech de alto nivel</p>
        </div>

        <nav class="footer__nav">
          <span class="footer__nav-title">Páginas</span>
          <a href="/microsite-conquerblocks/" class="footer__link">Inicio</a>
          <a href="/microsite-conquerblocks/pages/somos.html" class="footer__link">Somos</a>
          <a href="/microsite-conquerblocks/pages/cursos.html" class="footer__link">Cursos</a>
          <a href="/microsite-conquerblocks/pages/blog.html" class="footer__link">Blog</a>
          <a href="/microsite-conquerblocks/pages/registro.html" class="footer__link">Registro</a>
        </nav>

        <div class="footer__contact">
          <span class="footer__nav-title">Contacto</span>
          <a href="/microsite-conquerblocks/pages/contacto.html" class="footer__link">Contactar</a>
          <span class="footer__info">123 456 789</span>
          <span class="footer__info">conquer@negocios.com</span>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">&copy; 2026 ConquerBlocks. Proyecto educativo.</p>
      </div>
    </footer>
    `;

    this.shadowRoot.setHTMLUnsafe(html);
  }
}
