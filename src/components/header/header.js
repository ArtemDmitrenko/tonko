import NavMenu from "Components/nav-menu/nav-menu";

export default class Header {
  constructor(item) {
    this.item = item;
    this.init();
    this.addEventListeners();
  }

  init() {
    this.burger = this.item.querySelector(".js-header__burger");
    this.navMenuButtons = this.item.querySelector(
      ".js-header__with-nav-menu-buttons"
    );
    this.navMenu = new NavMenu(this.navMenuButtons);
    this.menuLinks = this.navMenu.navLinks;
    this.headerContainer = this.item.querySelector(".js-header__container");
    this.headerBurger =
      this.headerContainer.querySelector(".js-header__burger");
  }

  addEventListeners() {
    this.burger.addEventListener("click", this.handleBurgerClick);
  }

  handleBurgerClick = () => {
    $(this.burger).toggleClass("header_with-opened-burger");
    $(this.navMenuButtons).toggleClass("header__with-opened-menu");
    $(this.headerContainer).toggleClass("header__container_opened");
    $(this.headerBurger).toggleClass("header__burger_opened");
  };
}
