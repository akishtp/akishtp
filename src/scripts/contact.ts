const menuToggle = document.querySelector(".menu-toggle") as HTMLElement;
const hiddenMenu = document.querySelector(".hidden-menu") as HTMLElement;

const toggleMenu = () => {
  hiddenMenu.classList.toggle("open");
};

menuToggle.addEventListener("click", toggleMenu);
