const hamMenu = document.querySelector("#openHamMenu");

const showHamMenu = () => {
  let menu = document.querySelector("ul");
  menu.classList.toggle("mobileMenu");
};

hamMenu.addEventListener("click", showHamMenu);
