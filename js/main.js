var nav = document.getElementsByClassName("nav")[0];
var typeWriter = document.getElementsByClassName("typewriter-text")[0];

window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
    typeWriter.classList.toggle("animated", window.scrollY > 0);
});