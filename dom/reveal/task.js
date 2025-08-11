const reveals = document.querySelectorAll(".reveal");

function checkVisibility() {
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        if (element.classList.contains("reveal_active")) {
            return;
        }

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;

        if (isVisible) {
            element.classList.add("reveal_active")
        }
    })
}

window.addEventListener("scroll", checkVisibility)