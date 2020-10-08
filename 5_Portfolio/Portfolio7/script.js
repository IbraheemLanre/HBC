const hamburgerIcon = document.querySelector("#hamIcon");

const showHamMenu = () => {
  let menuList = document.querySelector("ul");
  menuList.classList.toggle("hide");
};

hamburgerIcon.addEventListener("click", showHamMenu);
