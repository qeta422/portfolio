var nav = document.getElementsByClassName("nav")[0];
var typeWriter = document.getElementsByClassName("typewriter-text")[0];
var tree = document.getElementsByClassName("tree-item-first")[0];
var second = document.getElementsByClassName("tree-item-second")[0];
var third = document.getElementsByClassName("tree-item-third")[0];
var fourth = document.getElementsByClassName("tree-item-fourth")[0];
var fifth = document.getElementsByClassName("tree-item-fifth")[0];

window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0);
    typeWriter.classList.toggle("animated", window.scrollY > 0);
    tree.classList.toggle("leftitem", window.scrollY > 1000);
    second.classList.toggle("rightitem", window.scrollY > 1300);
    third.classList.toggle("leftitem", window.scrollY > 1500);
    fourth.classList.toggle("rightitem", window.scrollY > 1700);
    fifth.classList.toggle("leftitem", window.scrollY > 2000);
});