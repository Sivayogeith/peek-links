const setBg = async (bg) => await browser.storage.local.set({ bg });

const setColor = async (color) => await browser.storage.local.set({ color });

const setFontSize = async (fontSize) =>
  await browser.storage.local.set({ fontSize });

const setPosition = async (position) => await browser.storage.local.set({ position });

const save = () => {
  setBg(bgInput.value);
  setColor(colorInput.value);
  setFontSize(fontSizeInput.value);
  setPosition(positionInput.value);
};

const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");
const bgInput = document.getElementById("background-input");
const colorInput = document.getElementById("color-input");
const fontSizeInput = document.getElementById("font-size-input");
const positionInput = document.getElementById("position-input");

saveBtn.addEventListener("click", save);

resetBtn.addEventListener("click", () => {
  bgInput.value = DEFAULT_BG;
  colorInput.value = DEFAULT_COLOR;
  fontSizeInput.value = DEFAULT_FONTSIZE;
  positionInput.value = DEFAULT_POSITION;
  save();
});

browser.storage.local
  .get("bg")
  .then((result) => (bgInput.value = result.bg));

browser.storage.local
  .get("color")
  .then((result) => (colorInput.value = result.color));

browser.storage.local
  .get("fontSize")
  .then((result) => (fontSizeInput.value = result.fontSize));

browser.storage.local
  .get("position")
  .then((result) => (positionInput.value = result.position));

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