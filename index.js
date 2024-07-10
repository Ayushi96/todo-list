let entry = {
  todo_item: "",
  deadline: null,
};
let todo_list = [];
console.log(todo_list);
displayItems();

function addTodoItem() {
  let todoItem = document.querySelector("#todo-item");
  entry = {
    todo_item: todoItem.value,
    deadline: document.querySelector("#deadline").value,
  };
  todo_list.push(entry);
  todoItem.value = "";
  console.log(todo_list);
  //   localStorage.setItem("todo", JSON.stringify(todo_list));
  displayItems();
}

function displayItems() {
  console.log(todo_list.length);
  let table = document.querySelector(".display-area");
  let newHtml = `  <span class="heading"><b>To Do 🎯</b></span>
  <span class="heading"><b> Deadline ⏳</b></span>
  <span class="heading"><b> Action</b></span>`;
  for (let i = 0; i < todo_list.length; i++) {
    newHtml += `
        <span>${todo_list[i].todo_item}</span>
        <span>${todo_list[i].deadline}</span>
        <span> <button class="delete-button" onclick="todo_list.splice(${i},1); displayItems();">Done ✅ </button></td>
        </span>`;
  }
  table.innerHTML = newHtml;
}
let date_today = new Date();

document.querySelector(
  ".current-date"
).innerHTML = `Date 📅 <br><b id="date-today"> ${date_today.getDate()}/${
  date_today.getMonth()
}/${date_today.getFullYear()} </b>`;
