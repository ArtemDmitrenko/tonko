
export default class MobileSubmenu {
  constructor(mobileSubmenuButton, mobileSubmenu) {
    this.mobileSubmenuButton = mobileSubmenuButton;
    this.mobileSubmenu = mobileSubmenu;
    this.addEventListeners();
  }

  addEventListeners() {
    this.mobileSubmenuButton.addEventListener("click", this.handleSubButtonClick);
  }

  handleSubButtonClick = () => {
    $(this.mobileSubmenu).toggleClass("header__mobile-menu-sublist_opened");
    $(this.mobileSubmenuButton).toggleClass("header__mobile-menu-list-button_opened");
    // animated opening of sublist
    if (this.mobileSubmenu.style.maxHeight) {
      this.mobileSubmenu.style.maxHeight = null;
    } else {
      this.mobileSubmenu.style.maxHeight = this.mobileSubmenu.scrollHeight + "px";
    } 

  };
}
