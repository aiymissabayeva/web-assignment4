let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let tasks = [];

addTask.addEventListener("click", function() {
    let task = taskInput.value.trim();
    if (task === ""){
        return;
    }
    let newItem = document.createElement("li");
    newItem.textContent = task;
    tasks.push(task);
    taskList.appendChild(newItem);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newItem.appendChild(deleteBtn);
    newItem.addEventListener("click", function() {
    if (newItem.style.textDecoration === "line-through") {
        newItem.style.textDecoration = "none";
    } else {
        newItem.style.textDecoration = "line-through";
    }
});
    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        newItem.remove();
    let index = tasks.indexOf(task);
    if (index !== -1){
        tasks.splice(index,1);
    }
});
    taskInput.value = "";
});