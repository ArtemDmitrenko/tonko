import Header from "./header";

export default function HeaderInit(handleBurgerMenuClick) {
  document.querySelectorAll(".js-header").forEach((item) => {
    new Header(item, handleBurgerMenuClick);
  });
}
