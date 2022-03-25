export default function changeColor(color) {
  if (process.browser) {
    document.querySelector(":root").style.setProperty("--main-color", color);
  }
}
