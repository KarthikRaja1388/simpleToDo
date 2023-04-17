let inputField = document.querySelector(".userInput");
let btnAdd = document.querySelector(".btn-add");
let list = document.querySelector(".list");
let error = document.querySelector(".error");

let todoList = [];

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  let itemToAdd = inputField.value;
  if (itemToAdd !== "") {
    todoList.push(itemToAdd);
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "list-item");
    listItem.innerHTML = todoList[todoList.length - 1];
    list.appendChild(listItem);
    inputField.value = "";
    error.innerHTML = "";
  } else {
    error.innerHTML = "Please enter an item to add";
  }
});
