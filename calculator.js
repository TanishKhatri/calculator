let firstNumber = 1;
let operator = "*";
let secondNumber = 2;
let calcDisplay = document.querySelector(".calcDisplay");

function operate(firstNumber, operator, secondNumber) {
  switch(operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      return firstNumber/secondNumber;
    case "*":
      return firstNumber*secondNumber;    
  }
}

function buttonDisplay() {
  let digit = document.querySelectorAll(".digit");
  digit.addEventListener("click", () => {
    //Fill first number and second number accordingly and display them.
    return;
  })
}
console.log(operate(firstNumber,operator,secondNumber));