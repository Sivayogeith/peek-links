class PeekLinks {
  DEFAULT_BG = "lightblue";
  DEFAULT_COLOR = "black";
  peekLinks = document.createElement("div");

  constructor() {
    this.peekLinks.id = "peek-links";
    this.peekLinks.classList.add("peek-links");
    this.peekLinks.style.visibility = "hidden";
  }

  setBg(bg) {
    this.peekLinks.style.background = bg;
  }

  setColor(color) {
    this.peekLinks.style.color = color;
  }

  appendToBody() {
    document.body.appendChild(this.peekLinks);
  }

  toggleVisibility() {
    this.peekLinks.style.visibility =
      this.peekLinks.style.visibility == "visible" ? "hidden" : "visible";
  }

  setInnerHTML(html) {
    this.peekLinks.innerHTML = html;
  }
}