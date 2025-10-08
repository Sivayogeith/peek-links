const setBg = async (bg) => await chrome.storage.local.set({ bg });

const setColor = async (color) => await chrome.storage.local.set({ color });

const setFontSize = async (fontSize) =>
  await chrome.storage.local.set({ fontSize });

const setPosition = async (position) => await chrome.storage.local.set({ position });

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

chrome.storage.local
  .get("bg", (result) => (bgInput.value = result.bg));

chrome.storage.local
  .get("color", (result) => (colorInput.value = result.color));

chrome.storage.local
  .get("fontSize", (result) => (fontSizeInput.value = result.fontSize));

chrome.storage.local
  .get("position", (result) => (positionInput.value = result.position));

window.onload = async () => {
  await chrome.storage.local.set({
    force: true,
  });
};

window.onblur = async () => {
  await chrome.storage.local.set({
    force: false,
  });
};