const cards = document.querySelectorAll(".product-card")
const search = document.getElementById("search")
const menu = document.getElementById("menu")
const hamburger = document.getElementById("hamburger")
const overlay = document.getElementById("overlay")

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

const dropdown = document.getElementById("dropdown")
const menuBox = document.getElementById("dropdownMenu")

function toggleDropdown() {
    dropdown.classList.toggle("active")
}

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active")
    }
})

menuBox.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {

        const checked = [...menuBox.querySelectorAll("input:checked")]
            .map(i => i.value)

        document.getElementById("selectedText").textContent = "All"

        if (checked.length === 0) {
            filterProducts("all")
            return
        }

        cards.forEach(card => {
            card.style.display =
                checked.includes(card.dataset.type) ? "flex" : "none"
        })
    })
})

function filterProducts(type) {

    cards.forEach(card => {

        card.style.display =
            type === "all" || card.dataset.type === type
                ? "flex" : "none"
    })

    // set dropdown value
    document.getElementById("categorySelect").value = type
}

// search
if (search) {
    search.addEventListener("keyup", () => {
        const value = search.value.toLowerCase()

        cards.forEach(card => {
            const title = card
                .querySelector(".product-title")
                .textContent
                .toLowerCase()

            card.style.display = title.includes(value) ? "flex" : "none"
        })
    })
}

function openQuickView(title, sub, desc, img) {

    document.getElementById("panelTitle").textContent = title
    document.getElementById("panelSub").textContent = sub
    document.getElementById("panelDesc").textContent = desc
    document.getElementById("panelImg").src = img

    document.getElementById("quickPanel").classList.add("active")
    document.getElementById("quickOverlay").classList.add("active")

    document.body.style.overflow = "hidden"
}

function closeQuickView() {

    document.getElementById("quickPanel").classList.remove("active")
    document.getElementById("quickOverlay").classList.remove("active")

    document.body.style.overflow = "auto"
}

function applyFilter(types) {
    cards.forEach(card => {
        card.style.display =
            types.includes(card.dataset.type) ? "flex" : "none"
    })
}

// ===== AUTO FILTER FROM HOME =====
document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search)
    const type = params.get("type")

    if (type) {

        applyFilter([type])

        // set checkbox
        menuBox.querySelectorAll("input").forEach(input => {
            input.checked = input.value === type
        })

        document.getElementById("selectedText").textContent =
            type.charAt(0).toUpperCase() + type.slice(1)
    }

})
