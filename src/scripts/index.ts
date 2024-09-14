// Other interractible elements
const numberButtons = document.querySelectorAll(".number__buttons");
const cancelButton = document.querySelector("#cancel");
const decimalButton = document.querySelector("#decimal");
const symbolButtons = document.querySelectorAll(".symbol");
const backspaceButton = document.querySelector("#backspace");
const equalButton = document.querySelector(".equal");

// Displays
const mainDisplay = document.querySelector("#screen-main");
const signDisplay = document.querySelector("#sign");
const prevDisplay = document.querySelector("#prev");

// Variables for state
let total: number = 0;
let temp: string = "0";
let sign: string | null = null;

// Update display with new state
const updateScreen = () => {
  if (mainDisplay) {
    mainDisplay.textContent = temp;
  }
  if (signDisplay && sign) {
    signDisplay.textContent = sign;
  } else {
    if (signDisplay) {
      signDisplay.textContent = "";
    }
  }

  if (prevDisplay) {
    if (total && sign) {
      prevDisplay.textContent = `${total}`;
    } else {
      prevDisplay.textContent = "";
    }
  }
};

const handleNumberClick = (e: Event) => {
  e.preventDefault();
  const button = e.currentTarget as HTMLButtonElement;
  const value = button.textContent;

  if (value) {
    if (temp == "0") {
      temp = value;
    } else {
      temp = `${temp}${value}`;
    }
  }
  updateScreen();
};

const handleCancelClick = (e: Event) => {
  e.preventDefault();
  total = 0;
  sign = null;
  temp = "0";
  updateScreen();
};

const handleDecimalPointClick = (e: Event) => {
  e.preventDefault();
  if (temp != "0") {
    if (!temp.includes(".")) {
      temp = `${temp}.`;
    }
  }
  updateScreen();
};

const handleBackspace = (e: Event) => {
  e.preventDefault();
  if (temp.length > 1) {
    temp = temp.slice(0, -1);
  } else {
    temp = "0";
  }
  updateScreen();
};

const calculate = () => {
  switch (sign) {
    case "+":
      return total + parseFloat(temp);
    case "-":
      return total - parseFloat(temp);
    case "×":
      return total * parseFloat(temp);
    case "÷":
      return total / parseFloat(temp);
    default:
      return total;
  }
};

const handleSymbolClick = (e: Event) => {
  e.preventDefault();
  const button = e.currentTarget as HTMLButtonElement;
  const value = button.textContent;

  if (value) {
    if (sign) {
      total = calculate();
      sign = value;
    } else {
      total = parseFloat(temp);
      sign = value;
    }
    temp = "0";
  }
  updateScreen();
};

const handleEqual = (e: Event) => {
  e.preventDefault();
  if (sign) {
    total = calculate();
    temp = total.toString();
    sign = null;
  } else {
    total = parseFloat(temp);
  }
  updateScreen();
};

document.addEventListener("DOMContentLoaded", () => {
  updateScreen();

  numberButtons.forEach((number) => {
    number.addEventListener("click", handleNumberClick);
  });

  if (cancelButton) {
    cancelButton.addEventListener("click", handleCancelClick);
  }

  if (decimalButton) {
    decimalButton.addEventListener("click", handleDecimalPointClick);
  }

  if (backspaceButton) {
    backspaceButton.addEventListener("click", handleBackspace);
  }

  symbolButtons.forEach((button) => {
    button.addEventListener("click", handleSymbolClick);
  });

  if (equalButton) {
    equalButton.addEventListener("click", handleEqual);
  }
});
