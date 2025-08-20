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
        const tooltip = document.createElement("div");

        tooltip.className = "tooltip";
        tooltip.textContent = tooltipText;
        tooltip.classList.add("tooltip", "tooltip_active");
        tooltip.style.left = x + "px";
        tooltip.style.top = y + 20 + "px";


        const parenNode = target.closest("a");

        parenNode.appendChild(tooltip)
    }
})