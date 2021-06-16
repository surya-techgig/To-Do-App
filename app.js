// Selection 
const inputbox = document.querySelector(".todo-input");
const submitbtn = document.querySelector(".todo-submit");
const todoulcontainer = document.querySelector(".todo-list");


// Event Listener 
document.addEventListener('DOMContentLoaded', getTodos);
document.addEventListener('DOMContentLoaded', () => {
    inputbox.focus();
}, false);

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    // ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = inputbox.value;
    //Save Local Storage Value
    saveLocalTodos(inputbox.value);
    // Completed Btn 
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("complete-btn");
    completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
    // Delete Btn 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    // Appending Into Html Tags 
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(completedBtn);
    todoDiv.appendChild(deleteBtn);
    todoulcontainer.appendChild(todoDiv);
    inputbox.value = "";
    inputbox.focus();
});

todoulcontainer.addEventListener("click", (event) => {
    const item = event.target;
    // For Delete Btn 
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    // For Complete Btn 
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    inputbox.focus();
});

// Function 
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = todo;
    // Completed Btn 
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("complete-btn");
    completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
    // Delete Btn 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    // Appending Into Html Tags 
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(completedBtn);
    todoDiv.appendChild(deleteBtn);
    todoulcontainer.appendChild(todoDiv);
    });
}
function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}