import "./sass/main.scss";

import { NavbarConquer } from "./components/navbar/navbar";
import { initCourses } from "./js/courses";

customElements.define("navbar-conquer", NavbarConquer);

document.addEventListener("DOMContentLoaded", initCourses);
