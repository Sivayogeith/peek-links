const setBg = async (bg) => {
  await browser.storage.local.set({
    bg: bg,
  });
};

const setColor = async (color) => {
  await browser.storage.local.set({
    color: color,
  });
};

const setFontSize = async (fontSize) => {
  await browser.storage.local.set({
    fontSize: fontSize,
  });
};

const save = () => {
  setBg(bgInput.value);
  setColor(colorInput.value);
  setFontSize(fontSizeInput.value);
};

const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");
const bgInput = document.getElementById("background-input");
const colorInput = document.getElementById("color-input");
const fontSizeInput = document.getElementById("font-size-input");

saveBtn.addEventListener("click", save);

resetBtn.addEventListener("click", () => {
  bgInput.value = DEFAULT_BG;
  colorInput.value = DEFAULT_COLOR;
  fontSizeInput.value = DEFAULT_FONTSIZE;
  save();
});

browser.storage.local.get("bg").then((result) => {
  let bg = result.bg;
  bgInput.value = bg;
  setBg(bg);
});

browser.storage.local.get("color").then((result) => {
  let color = result.color;
  colorInput.value = color;
  setColor(color);
});

browser.storage.local.get("fontSize").then((result) => {
  let fontSize = result.fontSize;
  fontSizeInput.value = fontSize;
  setFontSize(fontSize);
});

window.onload = async () => {
  await browser.storage.local.set({
    force: true,
  });
};

window.onblur = async () => {
  await browser.storage.local.set({
    force: false,
  });
};