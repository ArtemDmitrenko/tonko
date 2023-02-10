export default class SubHeader {
  constructor(item) {
    this.item = item.querySelector(".js-sub-header");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.menuButtons = this.item.querySelectorAll(
      ".js-sub-header__link"
    );

    this.mobileContainer = this.item.querySelector(".js-sub-header__content-mobile");
    this.innerWidth = window.innerWidth
    if (this.innerWidth < 1280 ) {
      $(this.mobileContainer).slick({
        infinite: false,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        variableWidth: true,

      });
    }
  }

  addEventListeners() {
    this.menuButtons.forEach((item, i) => {
      item.addEventListener("click", this.handleMenuButtonClick.bind(this, i, item));
    });
  }

  handleMenuButtonClick(i, item) {
    item.classList.add("sub-header__link_active")
    this.menuButtons.forEach((item, index) => {
      if (i !== index) {
        item.classList.remove("sub-header__link_active")
      }
    });

  }
}
