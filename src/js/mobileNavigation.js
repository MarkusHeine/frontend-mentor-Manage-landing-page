export const mobileNavigation = () => {
    const hamburgerBtn = document.querySelector("img[id='hamburger-btn']");
    const mobileLinksWrapper = document.querySelector(".mobile-links-wrapper");

    let navOpen = false;
    console.log(hamburgerBtn);

    const toggleMobileNav = () => {
        console.log("click");
        console.log(hamburgerBtn);

        navOpen = !navOpen;
        console.log("navOpen", navOpen);
        if (!navOpen) {
            hamburgerBtn.src = "./assets/images/icons/icon-hamburger.svg";
            mobileLinksWrapper.style.display = "none";
        } else {
            hamburgerBtn.src = "./assets/images/icons/icon-close.svg";
            mobileLinksWrapper.style.display = "flex";
        }
        console.log(hamburgerBtn);
    };

    hamburgerBtn.addEventListener("click", () => toggleMobileNav());
};
