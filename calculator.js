let firstNumber = 1;
let operator = "*";
let secondNumber = 2;

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

console.log(operate(firstNumber,operator,secondNumber));