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
    this.addEventListeners();
    this.minimizedHeaderIsOn = false
  }

  findElements() {
    this.productsSliders = document.querySelectorAll(".js-home__products-slider");
    this.body = document.querySelector("body");
    this.homeGallery = document.querySelector(".js-home__gallery");
    this.fixedMinimizedHeader = document.querySelector(".js-home__minimized-header");
  }

  initElements() {
    HeaderInit(this.handleBurgerMenuClick);
    new MainGallery(this.homeGallery);
    this.productsSliders.forEach((slider) => {
      new ProductsSlider(slider);
    });
  }

  addEventListeners() {
    document.addEventListener('scroll', this.handlePageScroll)
  }

  handlePageScroll = () => {
    this.setMinimizedHeader()
  }

  setMinimizedHeader = () => {
    const offset = 250
    if (window.pageYOffset > offset && !this.minimizedHeaderIsOn) {
      this.fixedMinimizedHeader.style.maxHeight = this.fixedMinimizedHeader.scrollHeight + "px";
      this.minimizedHeaderIsOn = true
    } else if (window.pageYOffset < offset && this.minimizedHeaderIsOn) {
      this.fixedMinimizedHeader.style.maxHeight = null;
      this.minimizedHeaderIsOn = false
    }
  }

  handleBurgerMenuClick = () => {
    $(this.body).toggleClass("lock");
  }
}
