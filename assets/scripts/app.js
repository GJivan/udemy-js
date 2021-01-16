const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, operationNumber, newResult) {
  const logEntry = {
    operatrion: operation,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function addCalc() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;

  currentResult += enteredNumber;
  createAndWriteOutput('+', intialResult, enteredNumber);
  writeToLog('ADD', intialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intialResult, enteredNumber);
  writeToLog('SUBTRACT', intialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intialResult, enteredNumber);
  writeToLog('MULTIPLY', intialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intialResult, enteredNumber);
  writeToLog('DIVIDE', intialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addCalc);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
