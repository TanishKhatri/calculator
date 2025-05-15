let firstNumber = "";
let operator = "";
let secondNumber = "";
let replaceFlag = true;
let fnOrSn = true;

const calcDisplay = document.querySelector(".calcDisplay");
const calcPreview = document.querySelector(".calcPreview");

function operate(firstNumber, operator, secondNumber) {
  let fn = parseFloat(firstNumber);
  let sn = parseFloat(secondNumber);
  switch(operator){
    case "+":
      return fn + sn;
    case "-":
      return fn - sn;
    case "/":
      if (sn === 0) {
        return "N/0=Bad!";
      } else {
        return fn/sn;
      }
    case "*":
      return fn*sn;
    default:
      console.log("Error: Operate was parsed wrong operator or numbers");
      break;  
  }
}

function numberClickEvent() {
  //List of all buttons
  let btnList = document.querySelectorAll(".digit");

  function fillNumberVariables(numberClicked) {
    if (fnOrSn) {
      if (replaceFlag) {
        firstNumber = numberClicked;
      } else {
        firstNumber += numberClicked;
      }
    } else {
      if (replaceFlag) {
        secondNumber = numberClicked;
      } else {
        secondNumber += numberClicked;
      }
    }
  }

  //Run the provided function for each button
  btnList.forEach((button) => {
    //Add an event listener which runs the provided function when button is clicked.
    button.addEventListener("click", (e) => {
      //Replace the text content with the pressed number if replaceFlag = true, else append to it.
      let numberClicked = e.target.textContent
      if (replaceFlag) {
        calcDisplay.textContent = numberClicked;
        fillNumberVariables(numberClicked);
        replaceFlag = false;
      } else {
        //Make sure that the text doesn't overflow.
        if (calcDisplay.textContent.length <= 10) {
          calcDisplay.textContent += numberClicked;
          fillNumberVariables(numberClicked);
        }
      }
    })
  })
}

function operatorButton() {
  let operatorList = document.querySelectorAll(".std");
  operatorList.forEach((op) => {
    op.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "add":
          operator = "+";
          fnOrSn = false;
          replaceFlag = true;
          break;
        case "subtract":
          operator = "-";
          fnOrSn = false;
          replaceFlag = true;
          break;
        case "multiply":
          operator = "*";
          fnOrSn = false;
          replaceFlag = true;
          break;
        case "divide":
          operator = "/";
          fnOrSn = false;
          replaceFlag = true;
          break;  
      }
    });
  });
}

function equalButton() {
  let eq = document.querySelector(".equal");
  eq.addEventListener("click", () => {
    let result = operate(firstNumber, operator, secondNumber);
    calcDisplay.textContent = result;
    firstNumber = `${result}`;
    replaceFlag = true;
    fnOrSn = true;
  })
}

function allClearButton() {
  let clearButton = document.querySelector("#clearButton");
  clearButton.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    calcDisplay.textContent = "0";
    calcPreview.textContent = "";
    replaceFlag = true;
    fnOrSn = true;
  })
}

numberClickEvent();
allClearButton();
operatorButton();
equalButton();