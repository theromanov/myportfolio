import "/src/sass/style.scss";

const hamburger = document.querySelector(".hamburger"),
  closeElem = document.querySelector(".menu__close"),
  menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.add("menu_active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("menu_active");
});
