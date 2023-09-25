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
  document.addEventListener("DOMContentLoaded", function(){
    console.log("h");
    openDialog();
});

function openDialog() {
  var dialog = document.createElement("div");
  dialog.className = "custom-dialog";
  dialog.style.display="block";
  // Create the dialog content
  var content = document.createElement("div");
  content.innerHTML = `
      <h2 class="dialog-title text-color-main">OFFERTA</h2>
      <p class="dialog-text"> <br>50% DI SCONTO </br>per i primi 100 che acquisteranno un libro </p>
      <button class="cta-btn cta-btn--hero" onclick="closeDialog()">Close</button>
  `;

  // Append the content to the dialog container
  dialog.appendChild(content);

  // Append the dialog container to the body
  document.body.appendChild(dialog);
}

