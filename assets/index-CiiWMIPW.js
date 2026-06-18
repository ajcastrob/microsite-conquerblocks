(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`:host{--header-height:64px;--z-tooltip:10;--z-fixed:100;--font-regular:400;--font-semi-bold:600;z-index:var(--z-fixed);-webkit-backdrop-filter:blur(1px);font-family:var(--primary-font);color:var(--on-surface);background-color:#09090b;border-bottom:1px solid #ffffff0d;display:block;position:sticky;top:0}.container{max-width:1200px;margin-inline:var(--container-padding-mobile)}@media (width>=1024px){.container{margin-inline:auto}}.nav{height:var(--header-height)}.nav ul{list-style:none}.nav__data{justify-content:space-between;align-items:center;height:100%;display:flex}.nav__logo{letter-spacing:-.05em;align-items:center;font-size:1.25rem;font-weight:800;text-decoration:none;display:inline-flex}.nav__logo-img{width:auto;height:32px}.nav__logo-text{font-family:var(--primary-font);align-items:center;gap:2px;font-weight:800;display:flex}.nav__logo-conquer{color:var(--on-surface)}.nav__logo-blocks{background:linear-gradient(135deg, var(--primary-lime) 0%, var(--secondary-cyan) 100%);color:var(--on-primary);border-radius:var(--radius-default);padding:0 6px}.nav__toogle{cursor:pointer;width:32px;height:32px;position:relative}.nav__burger,.nav__close{width:max-content;height:max-content;color:var(--primary-lime);cursor:pointer;margin:auto;font-size:1.5rem;transition:opacity .3s,transform .3s;position:absolute;inset:0}.nav__close{opacity:0;transform:rotate(90deg)}.nav__menu{margin:0;padding:0;list-style:none}.nav__link{color:var(--on-surface-variant);font-family:var(--secondary-font);font-size:.875rem;font-weight:500;text-decoration:none;transition:color .3s}.nav__link:hover{color:var(--primary-lime)}@media screen and (width<=1117px){.nav__menu{left:0;top:var(--header-height);width:100%;height:calc(100vh - var(--header-height));pointer-events:none;opacity:0;-webkit-backdrop-filter:blur(24px);background-color:#09090bf2;transition:opacity .3s,top .4s;position:absolute;overflow-y:auto}.nav__menu::-webkit-scrollbar{width:0}.nav__menu-ul{padding:var(--gutter) 0;flex-direction:column;gap:0;display:flex}.nav__link{padding:1rem var(--container-padding-mobile);color:var(--on-surface);font-size:1rem;font-weight:var(--font-semi-bold);background-color:#0000;border-bottom:1px solid #ffffff0d;transition:background-color .3s;display:block}.nav__link:hover{background-color:var(--surface-container);color:var(--primary-lime)}}.show-menu{opacity:1;top:var(--header-height);pointer-events:initial}.show-icon .nav__burger{opacity:0;transform:rotate(90deg)}.show-icon .nav__close{opacity:1;transform:rotate(90deg)}@media (width<=340px){.container{margin-inline:1rem}}@media (width>=1118px){.nav{justify-content:space-between;align-items:center;display:flex}.nav__toogle{display:none}.nav__menu{pointer-events:initial;opacity:1;-webkit-backdrop-filter:none;background-color:#0000;width:auto;height:auto;position:static;overflow:visible}.nav__menu-ul{flex-direction:row;align-items:center;gap:2rem;padding:0;display:flex}.nav__link{border-bottom:none;align-items:center;height:100%;padding:0;font-size:.875rem;display:flex}.nav__link:hover{background-color:#0000}}`,t=new CSSStyleSheet;t.replaceSync(e);var n=`https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css`,r=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.adoptedStyleSheets.push(t)}async connectedCallback(){await this.loadRemixIcons(),this.render(),this.setupToggle()}async loadRemixIcons(){try{let e=await(await fetch(n)).text(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowRoot.adoptedStyleSheets.push(t)}catch(e){console.warn(`No se pudieron cargar los Remix Icons:`,e)}}setupToggle(){let e=this.shadowRoot.getElementById(`nav-toggle`),t=this.shadowRoot.getElementById(`nav-menu`),n=this.shadowRoot.querySelector(`.nav`);e&&t&&(e.addEventListener(`click`,()=>{t.classList.toggle(`show-menu`),n.classList.toggle(`show-icon`)}),t.querySelectorAll(`.nav__link`).forEach(e=>{e.addEventListener(`click`,()=>{t.classList.remove(`show-menu`),n.classList.remove(`show-icon`)})}))}render(){this.shadowRoot.setHTMLUnsafe(`
    <nav class="nav container">
      <div class="nav__data">
        <a href="#" class="nav__logo">
          <span class="nav__logo-text">
            <span class="nav__logo-conquer">CONQUER</span>
            <span class="nav__logo-blocks">BLOCKS</span>
          </span>
        </a>

        <div class="nav__toogle" id="nav-toggle">
          <i class="ri-menu-line nav__burger"></i>
          <i class="ri-close-line nav__close"></i>
        </div>
      </div>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__menu-ul">
          <li>
            <a href="#" class="nav__link">Inicio</a>
          </li>
          <li>
            <a href="#" class="nav__link">Somos</a>
          </li>
          <li>
            <a href="#" class="nav__link">Cursos</a>
          </li>
          <li>
            <a href="#" class="nav__link">Blog</a>
          </li>
          <li>
            <a href="#" class="nav__link">Registro</a>
          </li>
          <li>
            <a href="#" class="nav__link">Login</a>
          </li>
          <li>
            <a href="#" class="nav__link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
    `)}};customElements.define(`navbar-conquer`,r);