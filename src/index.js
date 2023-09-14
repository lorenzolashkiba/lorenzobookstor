import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const row = document.querySelectorAll('#row');
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
// Add this script to the end of your HTML file or in a separate JavaScript file.


menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav');
    menuToggle.classList.toggle('is-active');
});

window.addEventListener("resize", (e) => {
    console.log("jj");
    const windowWidth = window.innerWidth;
    if (windowWidth < 900) {
        console.log(row);
        row.forEach(element => {
            element.classList.add("reverse");
        });
        
     }else {
        row.forEach(element => {
            element.classList.remove("reverse");
        });
     }

  });
