export default function changeColor(color: string): void {
  if (process.browser) {
    document
      .querySelector<HTMLInputElement>(":root")
      ?.style.setProperty("--main-color", color);
  }
}
