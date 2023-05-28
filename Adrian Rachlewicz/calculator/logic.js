// variables

let currentInput = document.getElementById("input");
let output = document.getElementById("result");
let buttons = document.querySelectorAll("button");
let clearBtn = document.getElementById("clear");
let eraseBtn = document.getElementById("erase");
let evaluate = document.getElementById("eval");

// calc display
let realTimeScreenValue = [];

// clear function
clearBtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
  output.innerHTML = 0;
});

// forEach loop through all buttons checking their functionality by class names and ids

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.id.match("erase")) {
      realTimeScreenValue.push(button.value);
      currentInput.innerHTML = realTimeScreenValue.join("");

      if (button.id.match("erase")) {
        realTimeScreenValue.pop();
        currentInput.innerHTML = realTimeScreenValue.join("");
        output.innerHTML = eval(realTimeScreenValue.join(""));
      }
      if (button.id.match("eval")) {
        output.innerHTML = eval(realTimeScreenValue.join(""));
      }

      if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
        output.innerHTML = 0;
      }
    }
  });
});
