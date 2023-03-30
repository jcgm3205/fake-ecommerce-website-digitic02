export function miniLibrary() {
    function toggleNavMenu() {
        document.getElementById("navMenu").classList.toggle("visible");
    }


    return { toggleNavMenu };
}