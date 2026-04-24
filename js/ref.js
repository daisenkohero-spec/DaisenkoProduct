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

function filterCards(category, btn) {
  document.querySelectorAll('.filters button')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.card').forEach(card => {
    card.style.display =
      category === 'all' || card.classList.contains(category)
        ? 'block'
        : 'none';
  });
}