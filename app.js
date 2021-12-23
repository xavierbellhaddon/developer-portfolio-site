const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}

window.addEventListener('resize', appHeight)

const navSlide = () => {
    const burger = document.querySelector(".navbar__burger");
    const navList = document.querySelector(".navbar__list_mobile");
    const navLinks = document.querySelectorAll(".navbar__list_mobile .navbar__link");
  
  
    burger.addEventListener("click", () => {
      navList.classList.toggle("navbar__list_visible");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
  
      burger.classList.toggle("navbar__burger_toggled");
    });
}

appHeight()

navSlide()