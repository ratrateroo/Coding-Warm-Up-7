window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const mobileButton = document.querySelector(".mobile-button");
mobileButton.addEventListener("click", () => {
  mobileButton.classList.toggle("open");
});
