export default class MobileSubmenu {
  constructor(mobileSubmenuButton, mobileSubmenu) {
    this.mobileSubmenuButton = mobileSubmenuButton;
    this.mobileSubmenu = mobileSubmenu;
    this.init();
    this.addEventListeners();
  }

  init() {
    this.mobileSubmenu.style.maxHeight = this.mobileSubmenu.scrollHeight + "px";
    $(this.mobileSubmenu).removeClass("header__mobile-menu-sublist_closed");
    $(this.mobileSubmenuButton).removeClass(
      "header__mobile-menu-list-button_closed"
    );
  }

  addEventListeners() {
    this.mobileSubmenuButton.addEventListener(
      "click",
      this.handleSubButtonClick
    );
  }

  handleSubButtonClick = () => {
    $(this.mobileSubmenu).toggleClass("header__mobile-menu-sublist_closed");
    $(this.mobileSubmenuButton).toggleClass(
      "header__mobile-menu-list-button_closed"
    );
    // animated opening of sublist
    if (this.mobileSubmenu.style.maxHeight !== "0px") {
      this.mobileSubmenu.style.maxHeight = 0;
    } else {
      this.mobileSubmenu.style.maxHeight =
        this.mobileSubmenu.scrollHeight + "px";
    }
  };
}
