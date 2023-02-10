export default class HeaderMinimized {
  constructor(item) {
    this.item = item;
    this.init();
    this.addEventListeners();
  }

  init() {
    this.isSubHeaderShown = false
    this.productionButton = this.item.querySelector(".js-header__minimized-header .js-nav-menu__link");
    this.allSubMenuButtons = this.item.querySelectorAll(".js-sub-header__link");
    this.subHeader = this.item.querySelector(".js-header-minimized__sub-header");
    this.headerMinimized = this.item.querySelector(".js-header__minimized-header");
    this.minimizedHeaderIsOn = false
  }

  addEventListeners() {
    this.productionButton.addEventListener("mouseover", this.handleProductionButtonHover);
    document.addEventListener("scroll", this.handlePageScrollForMinimizedHeader)
  }

  handlePageScrollForMinimizedHeader = () => {
    const offset = 250
    if (window.pageYOffset > offset && !this.minimizedHeaderIsOn) {
      this.headerMinimized.style.maxHeight = this.headerMinimized.scrollHeight + "px";
      this.minimizedHeaderIsOn = true
    } else if (window.pageYOffset < offset && this.minimizedHeaderIsOn) {
      this.headerMinimized.style.maxHeight = null;
      this.minimizedHeaderIsOn = false
    }
  }

  handleProductionButtonHover = () => {
    if (!this.isSubHeaderShown) {
      $(this.subHeader).addClass("header-minimized__sub-header_active")
      this.subHeader.style.maxHeight = this.subHeader.scrollHeight + "px";
      this.isSubHeaderShown = true
      document.addEventListener("mousemove", this.handleMousemoveOnDocument)
      document.addEventListener('scroll', this.handlePageScroll)
      this.allSubMenuButtons.forEach(button => {
        button.addEventListener("click", this.handleSubHeaderClick)
      })
    }
  };

  handlePageScroll = () => {
    const scrollOffset = 300
    if (window.pageYOffset < scrollOffset) {
      this.closeSubmenu()
    }
  }

  handleMousemoveOnDocument = (e) => {
    const offset = 130
    if (e.clientY > offset || window.pageYOffset < 250) {
      this.closeSubmenu()
    }
  }

  handleSubHeaderClick = (e) => {
    this.closeSubmenu()
  }

  closeSubmenu = () => {
    $(this.subHeader).removeClass("header-minimized__sub-header_active")
    document.removeEventListener("mousemove", this.handleMousemoveOnDocument)
    document.removeEventListener('scroll', this.handlePageScroll)
    this.subHeader.style.maxHeight = null;
    this.isSubHeaderShown = false
    this.allSubMenuButtons.forEach(button => {
      button.removeEventListener("click", this.handleSubHeaderClick)
    })
  }
}
