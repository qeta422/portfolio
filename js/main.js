window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });