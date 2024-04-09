var nav = document.getElementsByClassName("nav")[0];
var typeWriter = document.getElementsByClassName("typewriter-text")[0];
var tree = document.getElementsByClassName("first")[0];
var second = document.getElementsByClassName("second")[0];
var third = document.getElementsByClassName("third")[0];
var fourth = document.getElementsByClassName("fourth")[0];
var fifth = document.getElementsByClassName("fifth")[0];

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
  typeWriter.classList.toggle("animated", window.scrollY > 0);
  tree.classList.toggle("leftitem", window.scrollY > 800);
  second.classList.toggle("rightitem", window.scrollY > 1000);
  third.classList.toggle("leftitem", window.scrollY > 1500);
  fourth.classList.toggle("rightitem", window.scrollY > 1800);
  fifth.classList.toggle("leftitem", window.scrollY > 2100);
});
