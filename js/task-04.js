let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

valueEl.style.fontSize = "40px";
valueEl.style.color = "red";
valueEl.style.margin = "0 20px";
valueEl.style.textAlign = "center";
decrementBtn.style.fontSize = "40px";
decrementBtn.style.width = "60px";
decrementBtn.style.textAlign = "center";
decrementBtn.style.padding = "0";
decrementBtn.style.backgroundColor = "lightgreen";
incrementBtn.style.fontSize = "40px";
incrementBtn.style.width = "60px";
incrementBtn.style.textAlign = "center";
incrementBtn.style.backgroundColor = "lightgreen";
incrementBtn.style.padding = "0"

decrementBtn.addEventListener("click", function () {
  valueEl.textContent = counterValue -= 1;
});

incrementBtn.addEventListener("click", function () {
  valueEl.textContent = counterValue += 1;
});