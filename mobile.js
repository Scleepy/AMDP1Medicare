const hamburger = document.getElementsByClassName("hamburger-button")[0];
const mobileNav = document.getElementsByClassName("mobile-navbar")[0];

mobileNav.style.position = "fixed";

let active = false;

hamburger.addEventListener("click", (e) => {

    if(!active){
        mobileNav.style.position = "absolute";
        mobileNav.classList.add("appear");
        active = true;
    } else {
        mobileNav.style.position = "fixed";
        mobileNav.classList.remove("appear");
        active = false;
    }
});

const anchor = document.getElementsByClassName("dropdown-mobile-anchor")[0];
const productDropdown = document.getElementsByClassName("dropdown-mobile")[0];

let dropdownActive = false;

anchor.addEventListener("click", (e) => {

    if(dropdownActive){
        productDropdown.classList.remove("show-product-dropdown");
        dropdownActive = false;
    } else {
        productDropdown.classList.add("show-product-dropdown");
        dropdownActive = true;
    }
});
