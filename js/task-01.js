const listElByClass = document.querySelectorAll(".item");
console.log(listElByClass);
console.log("Number of categories: ", listElByClass.length);

listElByClass.forEach((item) => {
console.log("Category: ", item.firstElementChild.textContent);
console.log('Elements: ', item.lastElementChild.children.length);
});

