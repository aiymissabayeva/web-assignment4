let box = document.getElementById("box");

box.addEventListener("mouseover", function(){box.style.backgroundColor = "#f49cbb";});
box.addEventListener("mouseout", function(){box.style.backgroundColor = "#dd2d4a";});

let textInput = document.getElementById("textInput");
let output = document.getElementById("output");

textInput.addEventListener("keyup", function() {output.textContent = textInput.value});

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function(){
    let x = parseFloat(num1.value);
    let y = parseFloat(num2.value);
    if (isNaN(x) || isNaN(y)){
        result.textContent = "Please enter both numbers";
        return;
    }

    if (operation.value === "+"){
        result.textContent = x + y;
    }
    else if (operation.value === "-"){
        result.textContent = x - y;
    }
    else if (operation.value === "*"){
        result.textContent = x * y;
    }
    else if (operation.value === "/"){
        if (y === 0){
            result.textContent = "Cannot divide by zero"
        }
        else {
        result.textContent = x / y;
        }
    }

});