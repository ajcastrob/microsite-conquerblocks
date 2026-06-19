(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`:host{--header-height:64px;--z-tooltip:10;--z-fixed:100;--font-regular:400;--font-semi-bold:600;z-index:var(--z-fixed);-webkit-backdrop-filter:blur(28px)saturate(1.2);font-family:var(--primary-font);color:var(--on-surface);background-color:#09090bbf;border-bottom:1px solid #ffffff0a;transition:box-shadow .4s,background-color .4s;display:block;position:sticky;top:0}:host(.nav--scrolled){background-color:#09090be0;border-bottom-color:#ffffff0f;box-shadow:0 1px 4px #0006}.container{max-width:1200px;margin-inline:var(--container-padding-mobile)}@media (width>=1024px){.container{margin-inline:auto}}.nav{height:var(--header-height)}.nav ul{margin:0;padding:0;list-style:none}.nav__data{justify-content:space-between;align-items:center;height:100%;display:flex}.nav__logo{letter-spacing:-.05em;align-items:center;font-size:1.125rem;font-weight:800;text-decoration:none;display:inline-flex}.nav__logo-img{width:auto;height:32px}.nav__logo-text{font-family:var(--primary-font);align-items:center;gap:3px;font-size:1.25rem;font-weight:800;display:flex}.nav__logo-conquer{color:var(--on-surface)}.nav__logo-blocks{background:linear-gradient(135deg, var(--primary-lime) 0%, var(--secondary-cyan) 100%);color:var(--on-primary);border-radius:var(--radius-default);padding:0 8px}.nav__toogle{cursor:pointer;background:0 0;border:none;width:32px;height:32px;padding:0;position:relative}.nav__burger,.nav__close{width:max-content;height:max-content;color:var(--primary-lime);cursor:pointer;margin:auto;font-size:1.5rem;transition:opacity .3s,transform .3s;position:absolute;inset:0}.nav__close{opacity:0;transform:rotate(90deg)}.nav__menu{margin:0;padding:0;list-style:none}.nav__link{color:var(--on-surface-variant);font-family:var(--secondary-font);font-size:.875rem;font-weight:500;text-decoration:none;transition:color .3s;position:relative}.nav__link:hover{color:var(--primary-lime)}.nav__link--active{color:var(--primary-lime);font-weight:var(--font-semi-bold)}@media (width<=1023px){.nav__menu{left:0;top:var(--header-height);width:100%;height:calc(100vh - var(--header-height));pointer-events:none;opacity:0;-webkit-backdrop-filter:blur(28px);background-color:#09090bf5;transition:opacity .35s,top .4s;position:absolute;overflow-y:auto}.nav__menu::-webkit-scrollbar{width:0}.nav__menu-ul{padding:var(--gutter) 0;flex-direction:column;gap:0;display:flex}.nav__link{padding:1rem var(--container-padding-mobile);color:var(--on-surface);font-size:1rem;font-weight:var(--font-semi-bold);background-color:#0000;border-bottom:1px solid #ffffff0a;align-items:center;min-height:52px;transition:background-color .3s;display:flex}.nav__link:hover{background-color:var(--surface-container);color:var(--primary-lime)}.nav__link--active{background-color:var(--surface-container)}}.show-menu{opacity:1;top:var(--header-height);pointer-events:initial}.show-icon .nav__burger{opacity:0;transform:rotate(90deg)}.show-icon .nav__close{opacity:1;transform:rotate(90deg)}@media (width<=340px){.container{margin-inline:1rem}}@media (width>=1024px){.nav{justify-content:space-between;align-items:center;display:flex}.nav__toogle{display:none}.nav__menu{pointer-events:initial;opacity:1;-webkit-backdrop-filter:none;background-color:#0000;width:auto;height:auto;position:static;overflow:visible}.nav__menu-ul{flex-direction:row;align-items:center;gap:2rem;padding:0;display:flex}.nav__link{letter-spacing:.02em;border-bottom:none;align-items:center;height:100%;padding:0;font-size:.8125rem;display:flex}.nav__link:hover{background-color:#0000}.nav__link--active{color:var(--primary-lime);position:relative}.nav__link--active:after{content:"";background:var(--primary-lime);border-radius:1px;width:100%;height:2px;position:absolute;bottom:-20px;left:0;box-shadow:0 0 12px #d4ff0066}}`,t=new CSSStyleSheet;t.replaceSync(e);var n=`https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css`,r=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.adoptedStyleSheets.push(t)}async connectedCallback(){await this.loadRemixIcons(),this.render(),this.setupToggle(),this.setActivePage(),this.setupScrollEffect()}setActivePage(){let e=window.location.pathname;this.shadowRoot.querySelectorAll(`.nav__link`).forEach(t=>{let n=t.getAttribute(`href`);n&&e.endsWith(n.replace(`/microsite-conquerblocks`,``))&&(t.classList.add(`nav__link--active`),t.setAttribute(`aria-current`,`page`))})}setupScrollEffect(){let e=()=>{this.classList.toggle(`nav--scrolled`,window.scrollY>50)};window.addEventListener(`scroll`,e,{passive:!0}),e()}async loadRemixIcons(){try{let e=await(await fetch(n)).text(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowRoot.adoptedStyleSheets.push(t)}catch(e){console.warn(`No se pudieron cargar los Remix Icons:`,e)}}setupToggle(){let e=this.shadowRoot.getElementById(`nav-toggle`),t=this.shadowRoot.getElementById(`nav-menu`),n=this.shadowRoot.querySelector(`.nav`);e&&t&&(e.addEventListener(`click`,()=>{let r=t.classList.toggle(`show-menu`);n.classList.toggle(`show-icon`),e.setAttribute(`aria-expanded`,r),e.setAttribute(`aria-label`,r?`Cerrar menú`:`Abrir menú`)}),t.querySelectorAll(`.nav__link`).forEach(r=>{r.addEventListener(`click`,()=>{t.classList.remove(`show-menu`),n.classList.remove(`show-icon`),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-label`,`Abrir menú`)})}))}render(){this.shadowRoot.setHTMLUnsafe(`
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
    `)}},i=`:host{background-color:var(--surface-container-lowest,#000);font-family:var(--secondary-font,"DM Sans", sans-serif);color:var(--on-surface-variant,#a1a1aa);border-top:1px solid #ffffff0a;display:block;position:relative}:host:before{content:"";pointer-events:none;background:linear-gradient(90deg,#0000,#d4ff0026,#0000);height:1px;position:absolute;top:0;left:10%;right:10%}.footer__container{gap:32px;max-width:1200px;margin:0 auto;padding:48px 24px 24px;display:grid}@media (width>=768px){.footer__container{grid-template-columns:1.5fr 1fr 1fr;padding:64px 64px 32px}}.footer__logo{flex-direction:column;line-height:1.1;text-decoration:none;display:inline-flex}.footer__logo-cb{font-family:var(--primary-font,"Epilogue", sans-serif);letter-spacing:-.02em;color:var(--on-surface,#fafafa);font-size:1.25rem;font-weight:800}.footer__logo-blocks{font-family:var(--primary-font,"Epilogue", sans-serif);letter-spacing:-.02em;color:var(--primary-lime,#d4ff00);font-size:1.25rem;font-weight:300}.footer__desc{color:var(--on-surface-variant,#a1a1aa);max-width:260px;margin:12px 0 0;font-size:.875rem;line-height:1.6}.footer__nav-title{font-family:var(--primary-font,"Epilogue", sans-serif);text-transform:uppercase;letter-spacing:.08em;color:var(--on-surface,#fafafa);margin-bottom:16px;font-size:.6875rem;font-weight:700;display:block}.footer__nav{flex-direction:column;gap:10px;display:flex}.footer__link{color:var(--on-surface-variant,#a1a1aa);align-items:center;width:fit-content;min-height:44px;padding:8px 0;font-size:.875rem;text-decoration:none;transition:color .25s ease-out,transform .25s ease-out;display:inline-flex}.footer__link:hover{color:var(--primary-lime,#d4ff00);transform:translate(4px)}.footer__contact{flex-direction:column;gap:10px;display:flex}.footer__info{color:var(--on-surface-variant,#a1a1aa);align-items:center;gap:8px;padding:4px 0;font-size:.875rem;display:flex}.footer__bottom{border-top:1px solid #ffffff0a;padding:20px 24px}@media (width>=768px){.footer__bottom{padding:20px 64px}}.footer__copy{max-width:1200px;color:var(--on-surface-variant,#a1a1aa);letter-spacing:.02em;margin:0 auto;font-size:.75rem}`,a=new CSSStyleSheet;a.replaceSync(i);var o=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.adoptedStyleSheets.push(a)}async connectedCallback(){this.render()}render(){this.shadowRoot.setHTMLUnsafe(`
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
    `)}};function s(){let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target.getAttribute(`data-reveal-delay`)||`0`;setTimeout(()=>{t.target.classList.add(`active`)},parseInt(n,10)),e.unobserve(t.target)}})},{threshold:.08,rootMargin:`0px 0px -40px 0px`});document.querySelectorAll(`[data-reveal], .courses__card`).forEach(t=>e.observe(t))}function c(){document.querySelectorAll(`.courses__card`).forEach(e=>{e.addEventListener(`touchstart`,()=>{e.style.transform=`scale(0.98)`,e.style.transition=`transform 0.15s ease-out`}),e.addEventListener(`touchend`,()=>{e.style.transform=`scale(1)`})})}function l(){s(),c()}customElements.define(`navbar-conquer`,r),customElements.define(`footer-conquer`,o),document.addEventListener(`DOMContentLoaded`,l);