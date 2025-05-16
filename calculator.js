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

function numberButtons() {
  //List of all buttons
  let btnList = document.querySelectorAll(".digit");

  function fillNumberVariables(numberClicked) {
    if (fnOrSn) {
      if (replaceFlag) {
        firstNumber = numberClicked;
      } else {
        firstNumber += numberClicked;
      }
      updateCalcPreview();
    } else {
      if (replaceFlag) {
        secondNumber = numberClicked;
      } else {
        secondNumber += numberClicked;
      }
      updateCalcPreview();
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
      if (secondNumber !== "" && !fnOrSn) {
        showResult();
      }
      switch (e.target.id) {
        case "add":
          operator = "+";
          fnOrSn = false;
          replaceFlag = true;
          updateCalcPreview();
          break;
        case "subtract":
          operator = "-";
          fnOrSn = false;
          replaceFlag = true;
          updateCalcPreview();
          break;
        case "multiply":
          operator = "*";
          fnOrSn = false;
          replaceFlag = true;
          updateCalcPreview();
          break;
        case "divide":
          operator = "/";
          fnOrSn = false;
          replaceFlag = true;
          updateCalcPreview();
          break;  
      }
    });
  });
}

function updateCalcPreview() {
  calcPreview.textContent = firstNumber + ` ${operator} ` + secondNumber;
}

function showResult() {
  let result = parseFloat(operate(firstNumber, operator, secondNumber).toFixed(5));
  if (result.length > 10) {
    calcDisplay.textContent = "Number Big"
  } else {
    calcDisplay.textContent = result;
  }
  calcPreview.textContent += " = ";
  firstNumber = `${result}`;
  secondNumber = "";
  replaceFlag = true;
  fnOrSn = true;
}

function equalButton() {
  let eq = document.querySelector(".equal");
  eq.addEventListener("click", () => {
    if ((firstNumber !== "") && (secondNumber !== "") && (operator !== "")) {
      showResult();
    }
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

function decimalPointer() {
 let point = document.querySelector("#point");
 point.addEventListener(("click"), () => {
  if (!calcDisplay.textContent.includes(".")) {
    calcDisplay.textContent += "."
    if (fnOrSn) {
      firstNumber += ".";
      updateCalcPreview();
    } else {
      secondNumber += ".";
      updateCalcPreview();
    }
  }
 })
}

function removeButton() {
  let remove = document.querySelector("#remove");
  remove.addEventListener("click", () => {
    if (calcDisplay.textContent.length > 1) {
      calcDisplay.textContent = calcDisplay.textContent.slice(0, calcDisplay.textContent.length - 1);
    } else {
      calcDisplay.textContent = "0";
      replaceFlag = true;
    }
    if (fnOrSn) {
      firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    } else {
      secondNumber = secondNumber.slice(0, secondNumber.length - 1);
    }
    updateCalcPreview();
  })
}

function plusMinus() {
  let pm = document.querySelector("#plusMinus");
  pm.addEventListener("click", () => {
    if (fnOrSn) {
      let temp = parseFloat(firstNumber);
      temp *= -1;
      firstNumber = temp.toString();
      calcDisplay.textContent = firstNumber;
    } else {
      let temp = parseFloat(secondNumber);
      temp *= -1;
      secondNumber = temp.toString();
      calcDisplay.textContent = secondNumber;
    }
  })
}

function percent() {
  let percent = document.querySelector("#percent");
  percent.addEventListener("click", () => {
    if (fnOrSn) {
      let temp = parseFloat(firstNumber);
      temp = temp/100;
      firstNumber = temp.toString();
      calcDisplay.textContent = firstNumber;
    } else {
      let temp = parseFloat(secondNumber);
      temp = temp/100;
      secondNumber = temp.toString();
      calcDisplay.textContent = secondNumber;
    }
  })
}

percent();
plusMinus();
removeButton();
decimalPointer();
numberButtons();
allClearButton();
operatorButton();
equalButton();