import "../../import-jquery"
import "slick-carousel";


export default class ProductsSlider {
  constructor(item) {
    this.item = item.querySelector(".js-products-slider__slider");
    this.init();
  }

  init() {
    $(this.item).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: '<button class="products-slider__slider-button products-slider__slider-button_prev"></button>',
      nextArrow: '<button class="products-slider__slider-button products-slider__slider-button_next"></button>',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false
          }
        },    
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true
          }
        },
        {
          breakpoint: 660,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        }
      ]
    });
  }
}