const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const hi = document.querySelector("h1");

console.log(inputEl);
console.log(outputEl);

inputEl.style.color = "green";
inputEl.style.backgroundColor = "lightyellow";
inputEl.style.fontSize = "20px";
outputEl.style.color = "tomato";
hi.style.color = "green";

inputEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";

    return;
  }

  outputEl.textContent = event.target.value;
});