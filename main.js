const images = [
  "./imgs/text_01.jpg",
  "./imgs/text_02.jpg",
  "./imgs/text_03.jpg",
  "./imgs/landscape_00.jpg",
  "./imgs/fire_00.jpg",
  "./imgs/fire_01.jpg",
  "./imgs/fire_02.jpg",
  "./imgs/fire_03.jpg",
];

window.addEventListener('load', () => {
  const container = document.getElementById('main-container');

  images.forEach((imgPath) => {
    const imgDivEl = document.createElement("div");
    imgDivEl.classList.add("img-container");
    container.appendChild(imgDivEl);

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `${imgPath}`);
    imgEl.classList.add("img-hor");
    imgDivEl.appendChild(imgEl);
  });
});
