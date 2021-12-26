document.addEventListener("DOMContentLoaded", function () {
  let node = document.querySelector(".preload");
  node.classList.remove("preload");
});

const appHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};

window.addEventListener("resize", appHeight);

appHeight();

const navScroll = () => {
  const navbar = document.querySelector(".navbar");
  const navList = document.querySelector(".navbar__list_mobile");
  const mainContentContainer = document.querySelector(".main-content-container");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("navbar_scrolled");
    navList.classList.add("navbar__list_scrolled");
    mainContentContainer.classList.add("main-content-container_scrolled");
  } else {
    navbar.classList.remove("navbar_scrolled");
    navList.classList.remove("navbar__list_scrolled");
    mainContentContainer.classList.remove("main-content-container_scrolled");
  }
}

window.onscroll = () => {
  navScroll();
};

const navSlide = () => {
  const burger = document.querySelector(".navbar__burger");
  const navList = document.querySelector(".navbar__list_mobile");
  const navItems = document.querySelectorAll(
    ".navbar__list_mobile .navbar__item"
  );

  burger.addEventListener("click", () => {
    document.body.classList.toggle("overflow-hidden");
    navList.classList.toggle("navbar__list_visible");

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

navSlide();
