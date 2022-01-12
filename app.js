const navSlide = () => {
  let burger = document.querySelector(".navbar__burger");
  let navList = document.querySelector(".navbar__list_mobile");
  let navItems = document.querySelectorAll(
    ".navbar__list_mobile .navbar__item"
  );

  burger.addEventListener("click", () => {
    navList.classList.toggle("navbar__list_visible");
    document.body.classList.toggle("overflow-hidden");

    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("navbar__burger_toggled");
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 600px)").matches) {
      if (
        navList.classList.contains("navbar__list_visible") &&
        burger.classList.contains("navbar__burger_toggled")
      ) {
        navItems.forEach((item) => {
          item.style.animation = "";
        });

        document.body.classList.remove("overflow-hidden");
        navList.classList.remove("navbar__list_visible");
        burger.classList.remove("navbar__burger_toggled");
      }
    }
  });
};

let path = window.location.pathname;
let page = path.split("/").pop();

if (page !== "success.html" && page !== "404.html") {

  document.addEventListener("DOMContentLoaded", function () {
    let node = document.querySelector(".preload");
    node.classList.remove("preload");
  });

  navSlide();
}

let copyrightYear = document.querySelector(".year");
let currentYear = new Date().getFullYear();

copyrightYear.innerText = currentYear;

