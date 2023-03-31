export function miniLibrary() {
    function toggleNavMenu() {
        document.getElementById("navMenu").classList.toggle("visible");
    }

    function toggleClass(element, cssClass) {
        document.getElementById(element).classList.toggle(cssClass);
    }

    return { toggleNavMenu, toggleClass };
}