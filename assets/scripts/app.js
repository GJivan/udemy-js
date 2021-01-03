const defaultResult = 0;
let currentResult = defaultResult;

function addCalc(num1, num2) {
  const result = num1 + num2;
  return result;
}


currentResult = addCalc(1,2);



let calculationDescription = '(' + defaultResult + ') + 10 + 0';

outputResult(currentResult, calculationDescription);

