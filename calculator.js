let firstNumber = "";
let operator = "";
let secondNumber = "";

//While true change first number else change second number
let operatorTrigger = false;
const calcDisplay = document.querySelector(".calcDisplay");
const calcPreview = document.querySelector(".calcPreview");


function operate(firstNumber, operator, secondNumber) {
  let fn = parseInt(firstNumber);
  let sn = parseInt(secondNumber);
  switch(operator) {
    case "+":
      return fn + sn;
    case "-":
      return fn - sn;
    case "/":
      return fn/sn;
    case "*":
      return fn*sn;    
  }
}

function numberDisplay() {
  let digits = document.querySelectorAll(".digit");
  let currentNumber = "";
  digits.forEach((digit) => {
    digit.addEventListener("click", (e) => {
      if (calcDisplay.textContent.length < 10) {
        if (!operatorTrigger) {
          currentNumber = e.target.textContent;
          calcDisplay.textContent === "0" ? calcDisplay.textContent = currentNumber : calcDisplay.textContent += currentNumber;
          calcPreview.textContent += currentNumber;
          firstNumber += currentNumber;
        } else {
          currentNumber = e.target.textContent;
          calcDisplay.textContent === "0" ? calcDisplay.textContent = currentNumber : calcDisplay.textContent += currentNumber;
          calcPreview.textContent += currentNumber;
          secondNumber += currentNumber;
        }
      }
    });
  });
}

function operatorButton () {
  let operators = document.querySelectorAll(".std");
  operators.forEach((op) => {
    op.addEventListener("click", (e) => {
      switch(e.target.id) {
        case "add":
          operator = "+";
          calcPreview.textContent = `${firstNumber + " " + operator + " "}`;
          operatorTrigger = true;
          break;
        case "divide":
          operator = "/";
          calcPreview.textContent = `${firstNumber + " " + operator + " "}`;
          operatorTrigger = true;
          break;
        case "multiply":
          operator = "*";
          calcPreview.textContent = `${firstNumber + " " + operator + " "}`;
          operatorTrigger = true;
          break;
        case "subtract":
          operator = "-"
          calcPreview.textContent = `${firstNumber + " " + operator + " "}`;
          operatorTrigger = true;
          break;      
      }
    });
  });
}

function addClearButton () {
  let clearButton = document.querySelector("#clearButton");
  clearButton.addEventListener("click", () => {
    calcDisplay.textContent = "0";
    calcPreview.textContent = "";
    firstNumber = "";
    secondNumber= "";
    operator = "";
  });
}

function changeButtonColorOnClick () {
  let btn = document.querySelectorAll(".button");
  btn.forEach((button) => {
    button.addEventListener("mousedown", (e) => {e.target.style.backgroundColor = "#121212"});
    button.addEventListener("mouseup", (e) => {e.target.style.backgroundColor = ""});
    button.addEventListener("mouseleave", (e) => {e.target.style.backgroundColor = ""});
  })
}

operatorButton();
changeButtonColorOnClick();
addClearButton();
numberDisplay();
