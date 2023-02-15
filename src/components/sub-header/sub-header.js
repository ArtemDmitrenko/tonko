export default class SubHeader {
  constructor(item) {
    this.item = item.querySelector(".js-sub-header");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.menuButtons = this.item.querySelectorAll(".js-sub-header__link");
  }

  addEventListeners() {
    this.menuButtons.forEach((item, i) => {
      item.addEventListener(
        "click",
        this.handleMenuButtonClick.bind(this, i, item)
      );
    });
  }

  handleMenuButtonClick(i, item) {
    item.classList.add("sub-header__link_active");
    this.menuButtons.forEach((item, index) => {
      if (i !== index) {
        item.classList.remove("sub-header__link_active");
      }
    });
  }
}
