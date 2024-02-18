function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesElem = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = "";
  }
});

function createBoxes(amount) {
  boxesElem.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesElem.appendChild(box);

    size += 10;
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesElem.innerHTML = "";
}