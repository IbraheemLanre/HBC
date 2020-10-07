const hamMenu = document.querySelector("#openHam");

const openHamMenu = () => {
  let menu = document.querySelector("ul");
  menu.classList.toggle("mobileMenu");
};

hamMenu.addEventListener("click", openHamMenu);
