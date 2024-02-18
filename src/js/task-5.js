function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetElem = document.querySelector(".widget")
const colorElem = document.querySelector(".color")
const btnElem = document.querySelector(".change-color")

btnElem.addEventListener("click", onBtnClick);

function onBtnClick() {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  colorElem.textContent = changeColor;
}
