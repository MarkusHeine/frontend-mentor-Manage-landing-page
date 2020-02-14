export const mobileNavigation = () => {
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const mobileLinksWrapper = document.querySelector(".mobile-links-wrapper");
    const mobileLinksList = document.querySelector(".mobile-links-list");
    const body = document.querySelector("body");

    let navOpen = false;

    const toggleMobileNav = () => {
        navOpen = !navOpen;
        if (!navOpen) {
            hamburgerBtn.src = "./assets/images/icons/icon-hamburger.svg";
            mobileLinksWrapper.style.display = "none";
            body.classList.remove("no-scroll");
        } else {
            hamburgerBtn.src = "./assets/images/icons/icon-close.svg";
            mobileLinksWrapper.style.display = "flex";
            body.classList.add("no-scroll");
        }
    };

    hamburgerBtn.addEventListener("click", () => {
        toggleMobileNav();
    });

    mobileLinksList.addEventListener("click", () => {
        toggleMobileNav();
    });
};
