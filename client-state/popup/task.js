const modal = document.querySelector(".modal_active")
const modalClose = document.querySelector(".modal__close");

if (document.cookie) {
    modalRemove()
} else {
    modalClose.addEventListener("click", () => {
        modalRemove()
        document.cookie = "modalClose=True"
    })
}

function modalRemove() {
    modal.classList.remove("modal_active")
}