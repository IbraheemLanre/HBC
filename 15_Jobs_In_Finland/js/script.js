const gotoTopBtn = document.querySelector(".goto-topBtn");
const width = window.matchMedia("(max-width: 576px)");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".btn");
const hamburgerMenu = document.querySelector("#menu");
const opneM = document.querySelector("#openMenu");
const closeM = document.querySelector("#closeMenu");
const navBar = document.querySelector(".top-menu");
const sticky = navBar.offsetTop;
const mainDiv = document.querySelector("main");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    (document.documentElement.scrollTop > 200 && !width.matches)
  ) {
    gotoTopBtn.style.display = "flex";
  } else {
    gotoTopBtn.style.display = "none";
  }
});

gotoTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// SHOW & HIDE SEARCH FORM
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("hide");
});

opneM.addEventListener("click", () => {
  closeM.classList.toggle("hide");
  hamburgerMenu.style.display = "block";
  //   hamburgerMenu.hidden;
});

closeM.addEventListener("click", () => {
  closeM.classList.toggle("hide");
  hamburgerMenu.style.display = "none";
});

/**
 * Sticky Nav Menu
 */

const stickyMenu = () => {
  if (window.pageYOffset >= sticky && !width.matches) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

window.addEventListener("scroll", stickyMenu);
