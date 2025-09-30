const STYLES = `
.peek-links {
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 0.4rem;
  padding-right: 1rem;
  border-radius: 0 20px 0 0;
  z-index: 100;
  }
`;

const peekLinks = new PeekLinks();


const setBg = async (bg) => {
  if (!bg) {
    bg = DEFAULT_BG;
    await browser.storage.local.set({
      bg: bg,
    });
  }
  peekLinks.setBg(bg);
};

const setColor = async (color) => {
  if (!color) {
    color = DEFAULT_COLOR;
    await browser.storage.local.set({
      color: color,
    });
  }
  peekLinks.setColor(color);
};

const setFontSize = async (fontSize) => {
  if (!fontSize) {
    fontSize = DEFAULT_FONTSIZE;
    await browser.storage.local.set({
      fontSize: fontSize,
    });
  }
  peekLinks.setFontSize(fontSize);
};

const onStorageChange = async (changes, area) => {
  if (area == "local") {
    if ("bg" in changes) setBg(changes.bg.newValue);
    if ("color" in changes) setColor(changes.color.newValue);
    if ("fontSize" in changes) setFontSize(changes.fontSize.newValue);
    if ("force" in changes) {
      peekLinks.peekLinks.style.visibility = changes.force.newValue ? "visible" : "hidden"
      peekLinks.setInnerHTML("Preview: This is what you see when you hover over a link.")
    }
      
  }
};

const onHoverLink = (link, ev) => {
  peekLinks.setInnerHTML(link.HREF);
  peekLinks.toggleVisibility();
};

const init = () => {
  // add styles
  const styleSheet = document.createElement("style");
  styleSheet.textContent = STYLES;
  document.head.appendChild(styleSheet);

  // get all links
  const links = document.getElementsByTagName("a");

  for (let link of links) {
    // prevent default link preview
    link.onclick = () => (window.location = link.href);
    link.HREF = link.href;
    link.removeAttribute("href");

    link.onmouseenter = (ev) => onHoverLink(link, ev);
    link.onmouseleave = () => peekLinks.toggleVisibility();
  }

  // storage stuff
  browser.storage.local
    .get("bg")
    .then(async (result) => setBg(result.bg));
  browser.storage.local
    .get("color")
    .then(async (result) => setColor(result.color));
  browser.storage.local
    .get("fontSize")
    .then(async (result) => setFontSize(result.fontSize));

  browser.storage.onChanged.addListener(onStorageChange);

  // append peeklinks to body
  peekLinks.appendToBody();
};

init();
