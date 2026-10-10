let button = document.getElementById("btn");

button.addEventListener("click", function() {document.getElementById("age").textContent = "I am 25 years old."});

let btn = document.getElementById("background");
btn.addEventListener("click", function() {document.getElementById("container").style.backgroundColor = "blanchedalmond";});

let btnt = document.getElementById("textsize");
btnt.addEventListener("click", function() {document.getElementById("hello").style.fontSize = "30px";});

let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let myList = document.getElementById("myList");

addBtn.addEventListener("click", function() { let newItem = document.createElement("li");
    newItem.textContent = "Item 3"; 
    myList.appendChild(newItem);});

removeBtn.addEventListener("click", function(){
    if (myList.lastElementChild){
    myList.removeChild(myList.lastElementChild);
}})