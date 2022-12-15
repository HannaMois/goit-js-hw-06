function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const valueInput = document.querySelector('[type="number"]');
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementsAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsAdd.push(div);
  }
  return elementsAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", () => {
  let boxesAdd = createBoxes(inputNum.value);
  boxes.append(...boxesAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener("click", () => {
  valueInput.value = "";
  destroyBoxes.call();
});
