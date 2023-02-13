import "slick-carousel";

export default class MainGallery {
  constructor(item) {
    this.sliderContainer = item.querySelector(".js-main-gallery__slider");
    this.init();
  }

  init() {
    $(this.sliderContainer).slick({
      arrows: false,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 9800,
      focusOnSelect: true,
      dots: true,
      appendDots: $(".js-main-gallery__slider-dots-box"),
      customPaging: function (slider, i) {
        return `<button>${i + 1}<svg height="34" width="34">
        <circle cx="17" cy="17" r="15.2" stroke="#3C3C3C" stroke-width="3" fill="transparent" stroke-dasharray="0, 100"/>
      </svg></button>`;
      },
      dotsClass: "main-gallery__slider-dots",
    });
  }
}
