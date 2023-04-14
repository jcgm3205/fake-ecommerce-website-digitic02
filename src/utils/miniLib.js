export function miniLibrary() {
    function toggleClass(element, cssClass) {
        document.getElementById(element).classList.toggle(cssClass);
    }

    return { toggleClass };
}