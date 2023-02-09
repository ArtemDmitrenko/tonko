export default class Button {
  constructor(item) {
    this.button = item.querySelector(".js-button");
  }

  hideButton() {
    this.button.classList.add("button_hidden");
  }

  showButton() {
    this.button.classList.remove("button_hidden");
  }

  hoverButton() {
    this.button.classList.add("button_hovered");
  }
}
