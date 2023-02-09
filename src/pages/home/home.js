import ProductsSlider from "../../components/products-slider/products-slider";

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
  }

  initElements() {
    this.productsSliders.forEach((slider) => {
      new ProductsSlider(slider);
    });
  }
}
