import "./sass/main.scss";

import { NavbarConquer } from "./components/navbar/navbar";
import { FooterConquer } from "./components/footer/footer";
import { initCourses } from "./js/courses";

customElements.define("navbar-conquer", NavbarConquer);
customElements.define("footer-conquer", FooterConquer);

document.addEventListener("DOMContentLoaded", initCourses);
