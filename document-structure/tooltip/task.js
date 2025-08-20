document.addEventListener("click", (e) => {
    const target = e.target;
    const tooltipActiveEl = document.querySelector(".tooltip_active");
    console.log(tooltipActiveEl)
    if (tooltipActiveEl) {
        tooltipActiveEl.classList.remove("tooltip_active");
    }

    if (target.classList.contains('has-tooltip')) {
        e.preventDefault();


        const tooltipText = target.getAttribute("title");
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = tooltipText;
        tooltip.classList.add("tooltip");
        tooltip.classList.add("tooltip_active");

        const parenNode = target.closest("a");

        parenNode.appendChild(tooltip)
    }
})