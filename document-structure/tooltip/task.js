const tooltip = document.querySelector(".tooltip");

document.addEventListener("click", (e) => {
    const target = e.target;
    const tooltipActiveEl = document.querySelector(".tooltip_active");
    if (tooltipActiveEl) {
        tooltipActiveEl.classList.remove("tooltip_active");
    }

    if (target.classList.contains('has-tooltip')) {
        e.preventDefault();

        const rect = target.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;

        const tooltipText = target.getAttribute("title");

        tooltip.textContent = tooltipText;
        tooltip.classList.add("tooltip_active");
        tooltip.style.left = x + "px";
        tooltip.style.top = y + 20 + "px";

        document.body.appendChild(tooltip)
    }
})
