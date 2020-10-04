const gotoTopBtn = document.querySelector(".goto-topBtn");
const width = window.matchMedia("(max-width: 576px)");

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
