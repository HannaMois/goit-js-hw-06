const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(rangeEl);
console.log(textEl);

textEl.style.color = "blueviolet";
textEl.style.fontSize = rangeEl.value;
rangeEl.addEventListener("input", raiseRange);

function raiseRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

