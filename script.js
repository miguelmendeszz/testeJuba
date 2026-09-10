/* =========================================
   ESPETINHOS DO JUBA
   JAVASCRIPT
========================================= */


/* ===== MENU MOBILE ===== */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu quando clicar em algum link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ===== ANO AUTOMÁTICO ===== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ===== ANIMAÇÃO DOS CARDS ===== */

const cards = document.querySelectorAll(".menu-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    observer.observe(card);

});


/* ===== HEADER AO ROLAR ===== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(9, 8, 7, 0.96)";

    } else {

        header.style.background =
            "rgba(15, 14, 12, 0.88)";

    }

});