const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("show");
}

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  hamburger.classList.remove("active");
  overlay.classList.remove("show");
});