import Header from "./header";

export default function headerInit() {
  document.querySelectorAll(".js-header").forEach((item) => {
    new Header(item);
  });
}
