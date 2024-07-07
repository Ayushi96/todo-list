let entry = {
  todo_item: "",
  deadline: null,
};
let todo_list =  [];
console.log(todo_list)
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
    console.log(todo_list.length)
  let table = document.querySelector(".table");
  let newHtml = ` <tr>
    <th id="table-heading">To Do</th>
    <th>Deadline</th>
  </tr>`;
  for (let i = 0; i < todo_list.length; i++) {
    newHtml += ` <tr>
        <td>${todo_list[i].todo_item}</td>
        <td>${todo_list[i].deadline}</td>
        <td> <button class="delete-button" onclick="todo_list.splice(${i},1); displayItems();">Delete</button></td>
    </tr>`;
  }
  table.innerHTML = newHtml;
}
