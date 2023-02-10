import Header from "./header";
import SubHeader from "../sub-header/sub-header";
import HeaderMinimized from "../header-minimized/header-minimized";

export default function HeaderInit(handleBurgerMenuClick) {
  document.querySelectorAll(".js-header").forEach((item) => {
    new Header(item, handleBurgerMenuClick);
    new HeaderMinimized(item)
    new SubHeader(item);
  });
}
