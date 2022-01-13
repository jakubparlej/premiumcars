const menu = document.querySelector(".navbar__menu");
const menuBtn = document.querySelector("#menuBtn");

let isMenuOpen = false;

const setMenuOpen = () => {
  if (isMenuOpen) {
    menu.classList.toggle("navbar__menu--active");
    isMenuOpen = !isMenuOpen;
  } else {
    menu.classList.toggle("navbar__menu--active");
    isMenuOpen = !isMenuOpen;
  }
};

menuBtn.addEventListener("click", setMenuOpen);
