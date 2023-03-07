// Functionality related with the 
// navigation menu and the "burger" button: 

const burgerBtn = document.getElementById("burgerBtn");
const xMarkBtn = document.getElementById("xMarkBtn");
const navMenu = document.getElementById("navMenu");

function toggleNavMenu() {
    navMenu.classList.toggle("visible");
}

burgerBtn.addEventListener("click", toggleNavMenu);
xMarkBtn.addEventListener("click", toggleNavMenu);