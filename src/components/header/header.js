import MobileSubmenu from './mobileSubmenu'


export default class Header {
  constructor(item, handleBurgerMenuClick) {
    this.item = item;
    this.handleBurgerMenuClick = handleBurgerMenuClick
    this.findElements();
    this.addEventListeners();
  }

  findElements() {
    this.burger = this.item.querySelector(".js-header__burger");
    this.mobileMenu = this.item.querySelector(".js-header__mobile-menu");
    this.mobileSubmenuButtons = this.item.querySelectorAll(".js-header__mobile-menu-list-button");
  }

  addEventListeners() {
    this.burger.addEventListener("click", this.handleBurgerClick);
  }

  handleBurgerClick = () => {
    $(this.burger).toggleClass("header_with-opened-burger");
    $(this.mobileMenu).toggleClass("header__mobile-menu_opened");
    this.handleBurgerMenuClick()
    this.mobileSubmenuButtons.forEach((mobileSubmenuButton) => {
      const mobileSubmenu = mobileSubmenuButton.nextElementSibling
      new MobileSubmenu(mobileSubmenuButton, mobileSubmenu);
    });
  };
}
