const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', addCalc);


function addCalc() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}
