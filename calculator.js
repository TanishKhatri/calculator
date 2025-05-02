let firstNumber = "";
let operator = "*";
let secondNumber = "";

//While true change first number else change second number
let fnOrSn = true;
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

//First do first number once operator is chosen do second number
function numberDisplay() {
  let digits = document.querySelectorAll(".digit");
  let currentNumber = "";
  digits.forEach((digit) => {
    digit.addEventListener("click", (e) => {
      currentNumber = e.target.textContent;
      calcDisplay.textContent === "0" ? calcDisplay.textContent = currentNumber : calcDisplay.textContent += currentNumber;
    });
  });
}

numberDisplay();
