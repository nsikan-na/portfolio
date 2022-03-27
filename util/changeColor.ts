export default function changeColor(color: string): void {
  //changes the theme colors
  if (process.browser) {
    document
      .querySelector<HTMLInputElement>(":root")
      ?.style.setProperty("--main-color", color);
  }
}
