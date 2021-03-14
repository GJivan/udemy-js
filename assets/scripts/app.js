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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
 let mathOperator; 
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator ='+';
  } else if ( calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if ( calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else if ( calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  

  createAndWriteOutput(mathOperator, intialResult, enteredNumber);
  writeToLog(calculationType, intialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
