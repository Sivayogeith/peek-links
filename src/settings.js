const setBg = async (bg) => await browser.storage.local.set({ bg: bg });

const setColor = async (color) => await browser.storage.local.set({ color });

const setFontSize = async (fontSize) =>
  await browser.storage.local.set({ fontSize });

const setFlip = async (flip) => await browser.storage.local.set({ flip });

const save = () => {
  setBg(bgInput.value);
  setColor(colorInput.value);
  setFontSize(fontSizeInput.value);
  setFlip(flipInput.checked);
};

const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");
const bgInput = document.getElementById("background-input");
const colorInput = document.getElementById("color-input");
const fontSizeInput = document.getElementById("font-size-input");
const flipInput = document.getElementById("flip-input");

saveBtn.addEventListener("click", save);

resetBtn.addEventListener("click", () => {
  bgInput.value = DEFAULT_BG;
  colorInput.value = DEFAULT_COLOR;
  fontSizeInput.value = DEFAULT_FONTSIZE;
  flipInput.checked = false;
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
  .get("flip")
  .then((result) => (flipInput.checked = result.flip));

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