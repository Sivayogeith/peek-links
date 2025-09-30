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

const bgInput = document.getElementById("background-input");
const colorInput = document.getElementById("color-input");
bgInput.addEventListener("change", (e) => setBg(e.target.value));
colorInput.addEventListener("change", (e) => setColor(e.target.value));

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
