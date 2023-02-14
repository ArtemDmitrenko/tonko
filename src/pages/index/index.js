import ScrollMagic from "scrollmagic";
import "debug.addIndicators";

import ProductsSlider from "@Components/products-slider/products-slider";
import HeaderInit from "@Components/header/header-init";
import MainGallery from "@Components/main-gallery/mainGallery";

export default class Home {
  constructor() {
    this.init();
  }

  init() {
    this.findElements();
    this.initElements();
    this.initAnimation();
  }

  findElements() {
    this.productsSliders = document.querySelectorAll(
      ".js-home__products-slider"
    );
    this.body = document.querySelector("body");
    this.homeGallery = document.querySelector(".js-home__gallery");
    this.subHeader = document.querySelector(".js-home__minimized-header");
  }

  initElements() {
    HeaderInit(this.handleBurgerMenuClick);
    new MainGallery(this.homeGallery);
    this.productsSliders.forEach((slider) => {
      new ProductsSlider(slider);
    });
  }

  handleBurgerMenuClick = () => {
    $(this.body).toggleClass("lock");
  };

  initAnimation = () => {
    const controller = new ScrollMagic.Controller();
    $(".js-reveal-animation").each(function () {
      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9,
        offset: 0,
      })
        .setClassToggle(this, "home_animated-element-visible")
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    });
  };
}
