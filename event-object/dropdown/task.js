document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const value = dropdown.querySelector(".dropdown__value");
        const list = dropdown.querySelector(".dropdown__list");

        value.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("dropdown__list_active");
        });

        const items = dropdown.querySelectorAll(".dropdown__item");
        items.forEach(item => {
            item.addEventListener("click", function (e) {
                e.preventDefault();

                const newValue = this.querySelector(".dropdown__link").textContent;

                value.textContent = newValue;

                list.classList.remove("dropdown__list_active");
            })
        })
    })
})