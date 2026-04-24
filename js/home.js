const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

let index = 0;
let total = slides.length;

const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

function showSlide() {
    slidesContainer.style.transition = "transform 0.6s ease";
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {

    index++;
    showSlide();

    if (index === total) {

        setTimeout(() => {
            slidesContainer.style.transition = "none";
            index = 0;
            slidesContainer.style.transform = `translateX(0%)`;
        }, 600);

    }
}

function prevSlide() {

    if (index === 0) {

        slidesContainer.style.transition = "none";
        index = total;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        setTimeout(() => {
            slidesContainer.style.transition = "transform 0.6s ease";
            index--;
            showSlide();
        }, 20);

    } else {

        index--;
        showSlide();

    }
}
setInterval(nextSlide, 5000);

/* MENU */
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

function goTo(type) {
    location.href = "product.html?type=" + type;
}

