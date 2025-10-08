const peekLinks = new PeekLinks();

const setBg = async (bg) => {
  if (!bg) {
    bg = DEFAULT_BG;
    await browser.storage.local.set({ bg });
  }
  peekLinks.setBg(bg);
};

const setColor = async (color) => {
  if (!color) {
    color = DEFAULT_COLOR;
    await browser.storage.local.set({ color });
  }
  peekLinks.setColor(color);
};

const setFontSize = async (fontSize) => {
  if (!fontSize) {
    fontSize = DEFAULT_FONTSIZE;
    await browser.storage.local.set({ fontSize });
  }
  peekLinks.setFontSize(fontSize);
};

const setPosition = async (position) => {
  if (!position) {
    position = DEFAULT_POSITION;
    await browser.storage.local.set({ position });
  }
  peekLinks.setPosition(position);
};

const onStorageChange = async (changes, area) => {
  if (area == "local") {
    if ("bg" in changes) setBg(changes.bg.newValue);
    if ("color" in changes) setColor(changes.color.newValue);
    if ("fontSize" in changes) setFontSize(changes.fontSize.newValue);
    if ("position" in changes) setPosition(changes.position.newValue);
    if ("force" in changes) {
      peekLinks.peekLinks.style.visibility = changes.force.newValue
        ? "visible"
        : "hidden";
      peekLinks.setInnerHTML(
        "Preview: This is what you see when you hover over a link."
      );
    }
  }
};

const onHoverLink = (link, ev) => {
  peekLinks.setInnerHTML(link.getAttribute("data-href"));
  peekLinks.toggleVisibility();
};

const init = () => {
  // get all links
  const links = document.getElementsByTagName("a");

  for (let link of links) {
    // prevent default link preview
    link.setAttribute("data-href", link.href);
    link.removeAttribute("href");
    link.addEventListener(
      "click",
      () => (window.open(link.getAttribute("data-href"), link.target ? link.target : "_self"))
    );

    link.onmouseenter = (ev) => onHoverLink(link, ev);
    link.onmouseleave = () => peekLinks.toggleVisibility();
  }

  // storage stuff
  browser.storage.local.get("bg").then(async (result) => setBg(result.bg));
  browser.storage.local
    .get("color")
    .then(async (result) => setColor(result.color));
  browser.storage.local
    .get("fontSize")
    .then(async (result) => setFontSize(result.fontSize));
  browser.storage.local
    .get("position")
    .then(async (result) => setPosition(result.position));

  browser.storage.onChanged.addListener(onStorageChange);

  // append peeklinks to body
  peekLinks.appendToBody();
};

init();
