const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function inputValue() {
    const inputValue = inputName.value.trim();
    if (inputValue === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = inputValue;
    }
}
inputName.addEventListener("input", inputValue);    