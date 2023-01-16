const display = document.querySelector("#display");
let operator = "";
let num1 = "";
let num2 = "";
let num3 = ""; 

function press(key) {
    num1 += key;
    num3 += num1;
    display.innerText = num3; 
}

function setOP(sign) {
    operator = sign;
    num2 = num1;
    num3 += sign;
    console.log(num1);
    console.log(num2);
    display.innerText = num3;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    num3 = "";
    operator = "";
    display.innerText = 0;
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;

    if (operator == "+") {
        res = a + b;
    }
    else if (operator == "-") {
        res = a - b;
    }
    else if (operator = "*") {
        res = a * b;
    }
    else {
        res = a/b;
    }
    num1 = res;
    display.innerText = res;
    num3 = res;
}