// app.js
gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(sectionId) {
    gsap.to(window, { duration: 1, scrollTo: sectionId, ease: "power2.inOut" });
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.lien a');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            scrollToSection(sectionId);
        });
    });
});
