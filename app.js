document.addEventListener("DOMContentLoaded",function(){
    let node = document.querySelector('.preload');
    node.classList.remove('preload');
  });

const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}

window.addEventListener('resize', appHeight)

const navSlide = () => {
    const burger = document.querySelector(".navbar__burger");
    const navList = document.querySelector(".navbar__list_mobile");
    const navItems = document.querySelectorAll(".navbar__list_mobile .navbar__item");
  
  
    burger.addEventListener("click", () => {
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
            navList.classList.contains("navbar__list_visible") 
            &&
            burger.classList.contains("navbar__burger_toggled")
          ) {
              
            navItems.forEach((item) => {
                  item.style.animation = "";
                })
    
            navList.classList.remove("navbar__list_visible");
            burger.classList.remove("navbar__burger_toggled");
          }
        }
      });
}

appHeight()

navSlide()