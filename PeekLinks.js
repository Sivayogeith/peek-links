class PeekLinks {
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

  setFontSize(fontSize) {
    this.peekLinks.style.fontSize = fontSize + 'px';
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
