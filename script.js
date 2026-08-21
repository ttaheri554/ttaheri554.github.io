const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

console.log("JS loaded");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});