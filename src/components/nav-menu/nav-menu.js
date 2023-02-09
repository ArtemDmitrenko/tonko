export default class NavMenu {
  constructor(item) {
    this.item = item.querySelector(".js-nav-menu");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.dropdownButtons = this.item.querySelectorAll(
      ".js-nav-menu__item_with-dropdown"
    );
    this.subLists = this.item.querySelectorAll(".js-nav-menu__sub-list");
    this.checkmarks = this.item.querySelectorAll(".js-nav-menu__checkmark");
  }

  addEventListeners() {
    document.addEventListener("click", this.handleDocumentClick);
    this.dropdownButtons.forEach((item, i) => {
      item.addEventListener("click", this.handleMenuItemClick.bind(this, i));
    });
  }

  handleMenuItemClick(i) {
    this.subLists[i].classList.toggle("nav-menu__sub-list_opened");
    this.checkmarks[i].classList.toggle("nav-menu__checkmark_direction_up");
  }

  handleDocumentClick = (event) => {
    this.dropdownButtons.forEach((item, i) => {
      if (
        !document
          .getElementsByClassName("js-nav-menu__item_with-dropdown")
          [i].contains(event.target)
      ) {
        if (this.subLists[i].classList.contains("nav-menu__sub-list_opened")) {
          this.subLists[i].classList.remove("nav-menu__sub-list_opened");
          this.checkmarks[i].classList.toggle(
            "nav-menu__checkmark_direction_up"
          );
        }
      }
    });
  };

  get navLinks() {
    return this.item.querySelectorAll(".js-nav-menu__link");
  }
}
