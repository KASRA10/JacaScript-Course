var heading = document.getElementById("header");
heading.style.fontFamily = "arial";
heading.style.textTransform = "capitalize";
var root = document.getElementById("root");
var form = document.createElement("form");
root.appendChild(form);
var input = document.createElement("input");
form.appendChild(input);
input.style.fontFamily = "arial";
input.style.backgroundColor = "#000";
input.style.color = "yellow";
input.style.padding = "10px 20px 10px 20px";
input.style.borderRadius = "10px 20px 10px 20px";
input.style.boxShadow = "2px 10px 30px rgba(0, 0, 0, 0.5)";
input.style.textAlign = "center";
input.style.fontSize = "16px";
input.setAttribute("placeholder", "ToDo");
var button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Add";
form.appendChild(button);
button.style.width = "100px";
button.style.height = "40px";
button.style.marginLeft = "20px";
button.style.outLine = "none";
button.style.border = "none";
button.style.borderRadius = "30px";
button.style.backgroundColor = "lightgreen";
button.style.fontFamily = "arial";
button.style.fontWeight = "bold";
button.style.cursor = "pointer";
button.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
var todoList = document.createElement("ol");
root.appendChild(todoList);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = input.value;
  if (value === "") return
  input.value = "";
  addTodo(value);
  saveTodo(value);
});
function addTodo(value) {
  var li = document.createElement("li");
  li.textContent = value;
  li.style.marginBottom = "18px";
  li.style.fontFamily = "arial";
  li.style.fontSize = "18px";
  li.style.fontWeight = "600";
  todoList.appendChild(li);
  var deleteIcon = deleteIconGenerator();
  li.appendChild(deleteIcon);
};

function deleteIconGenerator() {
  var deleteIcon = document.createElement("span");
  deleteIcon.textContent = "Delete";
  deleteIcon.style.color = "white";
  deleteIcon.style.fontSize = "16px";
  deleteIcon.style.marginLeft = "15px";
  deleteIcon.style.padding = "5px";
  deleteIcon.style.cursor = "pointer";
  deleteIcon.style.fontWeight = "800";
  deleteIcon.style.border = "3px solid #000";
  deleteIcon.style.borderRadius = "10px";
  deleteIcon.style.backgroundColor = "red";
  deleteIcon.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
  deleteIcon.setAttribute("title", "Delete");
  deleteIcon.addEventListener("click", function (e) {
    e.target.parentElement.remove();
    removeTodo(e.target.parentElement.firstChild.textContent);
  });
  return deleteIcon;
};

function getTodos() {
  var todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : []
};

function saveTodo(value) {
  var todos = getTodos();
  todos.push(value);
  saveTodos(todos);
};
function saveTodos(todos) {
  var todosString = JSON.stringify(todos);
  localStorage.setItem("todos", todosString);
};
function removeTodo(value) {
  var todos = getTodos();
  var newTodos = todos.filter(function (el) {
    return el !== value;
  });
  saveTodos(newTodos);
};
function loadTodos() {
  var todos = getTodos();
  todos.forEach(function (todo) {
    addTodo(todo);
  })
}
loadTodos();