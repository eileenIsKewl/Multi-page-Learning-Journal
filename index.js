
const viewMoreBtn = document.getElementById("viewMore-btn")
const moreArticleListings = document.getElementById("more-article-listings")
const navToggle = document.getElementById("nav-toggle")
const navLinks = document.getElementById("nav-links")

if (viewMoreBtn && moreArticleListings)
viewMoreBtn.addEventListener("click", function(){
    if (viewMoreBtn.textContent === "View More") {
        viewMoreBtn.textContent = "View Less"
        moreArticleListings.style.display = "block"
    }
    else {
        viewMoreBtn.textContent = "View More"
        moreArticleListings.style.display = "none"
    }
    

})

function closeMenu() {
    navLinks.classList.remove("open")
    navToggle.setAttribute("aria-expanded", false)
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function(e) {
        e.stopPropagation()

        const isOpen = navLinks.classList.toggle("open")
        navToggle.setAttribute("aria-expanded", isOpen)
        navToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>'
    })

    document.addEventListener("click", function() {
        if (navLinks.classList.contains("open")) {
            closeMenu()
        }
    })
}