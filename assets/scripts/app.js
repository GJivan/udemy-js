const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription);
}

function addCalc() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', intialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', intialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', intialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', intialResult, enteredNumber);
}

addBtn.addEventListener('click', addCalc);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
