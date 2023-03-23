const display = document.getElementById("result");
const keys = document.querySelector(".keys");

let firstValue = null;
let operator = null;
let secondValue = null;

keys.addEventListener("click", event => {
  const key = event.target;
  const keyValue = key.value;
  
  if (key.classList.contains("operator")) {
    operator = keyValue;
    firstValue = parseFloat(display.textContent);
    display.textContent = "";
  } else if (keyValue === "clear") {
    display.textContent = "";
    firstValue = null;
    operator = null;
    secondValue = null;
  } else if (keyValue === "calculate") {
    secondValue = parseFloat(display.textContent);
    let result;
    
    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result = firstValue / secondValue;
        break;
    }
    
    display.textContent = result;
    firstValue = null;
    operator = null;
    secondValue = null;
  } else {
    display.textContent += keyValue;
  }
});
