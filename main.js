const images = [];

for (let i = 1; i < 12; i++) {
  images.push(`./imgs/text_${("00".concat(i)).slice(-2)}.jpg`)
}

images.push("./imgs/landscape_00.jpg")
for (let i = 0; i < 8; i++) {
  images.push(`./imgs/apocalypse_${("00".concat(i)).slice(-2)}.jpg`)
}

for (let i = 13; i < 25; i++) {
  images.push(`./imgs/text_${("00".concat(i)).slice(-2)}.jpg`)
}

function slide() {
  const container = document.getElementById('main-container');
  const cML = parseInt(window.getComputedStyle(container)["marginLeft"]);
  container.style.marginLeft = `${cML - 4}px`;
  requestAnimationFrame(slide);
}

window.addEventListener('load', () => {
  const container = document.getElementById('main-container');
  const startButt = document.getElementById('start-button');

  images.forEach((imgPath) => {
    const imgDivEl = document.createElement("div");
    imgDivEl.classList.add("img-container");
    container.appendChild(imgDivEl);

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `${imgPath}`);
    imgEl.classList.add("img-hor");
    imgDivEl.appendChild(imgEl);
  });

  startButt.addEventListener("click", (ev) => {
    ev.target.style.display = "none";
    requestAnimationFrame(slide);
  });
});
