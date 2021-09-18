const display = document.getElementById("operations");
const numberButtons = document.getElementsByClassName("number");
const del = document.getElementById("delete");
const operatorButtons = document.getElementsByClassName("operators");
const clear = document.getElementById("allClear");
const equalsButton = document.getElementById("equals");
const dec = document.getElementById("points");
const equalsDisplay = document.getElementById("result");

let point = false;

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    operationDisplay(numberButtons[i].innerText);
  });
}

del.addEventListener("click", () => {
  cancel();
});

clear.addEventListener("click", () => {
  clearAll();
  point = false;
});

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    operations(operatorButtons[i].innerText);
  });
}

dec.addEventListener("click", (e) => {
  if (e.target.innerText === "." && !point && display.innerText != "0.0") {
    point = true;
    display.innerText = display.innerText + e.target.innerText;
  } else if (e.target.innerText === "." && point) {
    return;
  } else if (display.innerText == "0.0") {
    display.innerText = display.innerText.substring(0, 2);
    point = true;
  }
});

equalsButton.addEventListener("click", () => {
  ans();
});

function operationDisplay(num) {
  if (display.innerText == "0.0") {
    display.innerText = num;
  } else {
    display.innerText = display.innerText + num;
  }
}

function cancel() {
  let displaySize = display.innerText.length;
  let lastValue = display.innerText.substring(displaySize - 1, displaySize);
  if (lastValue == ".") {
    point = false;
  }
  if (display.innerText.length != 1 && display.innerText != "0.0") {
    display.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  } else {
    display.innerText = "0.0";
  }
}

function clearAll() {
  display.innerText = "0.0";
}

function operations(op) {
  let operator = op
  var lastValue = display.innerText.substring(
    display.innerText.length - 1,
    display.innerText.length
  );
  if (operator == "×" ){
    operator = "*"
  }
  if (operator == "÷"){
    operator = "/"
  }
  if (operator != lastValue && display.innerText.length > 0 && lastValue !="+" && lastValue !="-" && lastValue != "/" && lastValue != "*") {
    if(display.innerText == "0.0" && operator == "/"){
      return;
    }
    display.innerText = display.innerText + operator;
    point = false;
  }
}

function decimal(point) {
  display.innerText = display.innerText + point;
}

function ans() {
  var ans = math.evaluate(display.innerText);
  console.log(ans);
  equalsDisplay.innerText = ans;
}
function includes(val){
  return display.innerText.includes(val)
}
