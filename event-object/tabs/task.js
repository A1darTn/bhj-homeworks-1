const tabsContainer = document.getElementById("tabs1");
const tabs = tabsContainer.querySelectorAll(".tab");
const tabContents = tabsContainer.querySelectorAll(".tab__content");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        tabs.forEach(t => t.classList.remove("tab_active"));
        tabContents.forEach(c => c.classList.remove("tab__content_active"));

        this.classList.add("tab_active");
        
        const tabIndex = Array.from(tabs).indexOf(this);
        tabContents[tabIndex].classList.add("tab__content_active");
    })
})