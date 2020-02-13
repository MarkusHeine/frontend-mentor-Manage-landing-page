export const mobileNavigation = () => {
    const hamburgerBtn = document.querySelector("img[id='hamburger-btn']");
    const mobileLinks = document.querySelector(".mobile-links");
    const body = document.querySelector("body");

    let navOpen = false;

    hamburgerBtn.addEventListener("click", () => {
        navOpen = !navOpen;
        if (!navOpen) {
            hamburgerBtn.src = "./assets/images/icons/icon-hamburger.svg";
            mobileLinks.style.display = "none";
            body.classList.remove("body-bg-mobile");
        } else {
            hamburgerBtn.src = "./assets/images/icons/icon-close.svg";
            mobileLinks.style.display = "flex";
            body.classList.add("body-bg-mobile");
        }
    });
};
