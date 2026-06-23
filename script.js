const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTab = button.dataset.tab;

        tabButtons.forEach((tabButton) => {
            const isActive = tabButton === button;
            tabButton.classList.toggle("active", isActive);
            tabButton.setAttribute("aria-selected", String(isActive));
        });

        tabPanels.forEach((panel) => {
            panel.classList.toggle("active", panel.dataset.panel === selectedTab);
        });
    });
});
