class PeekLinks {
  peekLinks = document.createElement("div");

  constructor() {
    this.peekLinks.id = "peek-links";
    this.peekLinks.classList.add("peek-links");
    this.setStyles();
    this.flipped = false;
  }

  setStyles() {
    this.peekLinks.style.visibility = "hidden";
    this.peekLinks.style.bottom = "0px";
    this.peekLinks.style.left = "0px";
    this.peekLinks.style.position = "fixed";
    this.peekLinks.style.padding = "0.4rem";
    this.peekLinks.style.paddingRight = "1rem";
    this.peekLinks.style.borderRadius = "0 20px 0 0";
    this.peekLinks.style.zIndex = "100";
  }

  setBg(bg) {
    this.peekLinks.style.background = bg;
  }

  setColor(color) {
    this.peekLinks.style.color = color;
  }

  setFontSize(fontSize) {
    this.peekLinks.style.fontSize = fontSize + "px";
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

  setFlip(flip) {
    this.flipped = !flip;
    if (!flip) {
      this.peekLinks.style.removeProperty("right");

      this.peekLinks.style.paddingRight = "1rem";
      this.peekLinks.style.paddingLeft = "0.4rem";

      this.peekLinks.style.left = "0px";
      this.peekLinks.style.borderRadius = "0 20px 0 0";
    } else {
      this.peekLinks.style.removeProperty("left");

      this.peekLinks.style.paddingLeft = "1rem";
      this.peekLinks.style.paddingRight = "0.4rem";

      this.peekLinks.style.right = "0px";
      this.peekLinks.style.borderRadius = "20px 0 0 0";
    }
  }
}
