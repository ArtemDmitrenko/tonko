import ProductsSlider from "../../components/products-slider/products-slider";
import HeaderInit from "../../components/header/header-init"
import MainGallery from "../../components/main-gallery/mainGallery"

export default class Home {
  constructor() {
    this.init();
  }

  init() {
    this.findElements();
    this.initElements();
  }

  findElements() {
    this.productsSliders = document.querySelectorAll(".js-home__products-slider");
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
  }
}
