var nav = document.getElementsByClassName("nav")[0];

window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0);
});
