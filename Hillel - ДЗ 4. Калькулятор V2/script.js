let numberFirst;
let numberSecond;
let history = [];

function calcSum(numberFirst, numberSecond) {
  result = +numberFirst + +numberSecond;

  alert(`Operation 1 - Sum finished with result ${result}`);
  console.log(result);
}

function calcDif(numberFirst, numberSecond) {
  result = numberFirst - numberSecond;

  alert(`Operation 2 - Dif finished with result ${result}`);
  console.log(result);
}

function calcMult(numberFirst, numberSecond) {
  result = numberFirst * numberSecond;

  alert(`Operation 3 - Mult finished with result ${result}`);
  console.log(result);
}

function calcDiv(numberFirst, numberSecond) {
  result = numberFirst / numberSecond;

  alert(`Operation 4 - Div finished with result ${result}`);
  console.log(result);
}

function calcSin(numberFirst) {
  result = Math.sin(numberFirst);

  alert(`Operation 5 - Sin finished with result ${result}`);
  console.log(result);
}

function dispiHistory(res) {
  history[history.length] = res;
  console.log(history);
}

let count = 1;
for (let i = 0; i < count; i++) {
  do {
    menuOperation = +prompt(`You need to enter the operator
   Operator:
   1 - Sum: +
   2 - Dif: -
   3 - Mult: *
   4 - Div: /
   5 - Sin
   6 - History
   `);
  } while (!(menuOperation < 7 && menuOperation > 0));

  let result;

  if (menuOperation < 5) {
    do {
      numberFirst = +prompt('first number');
    } while (numberFirst !== numberFirst);
    do {
      numberSecond = +prompt('second number');
    } while (numberSecond !== numberSecond);
  }

  switch (menuOperation) {
    case 1:
      result = calcSum(numberFirst, numberSecond);
      dispiHistory(result);
      break;
    case 2:
      result = calcDif(numberFirst, numberSecond);
      break;
    case 3:
      result = calcMult(numberFirst, numberSecond);
      break;
    case 4:
      result = calcDiv(numberFirst, numberSecond);
      break;
    case 5:
      result = calcSin(numberFirst);
      break;
    case 6:
      dispiHistory()
      break;
  }

  let ask = confirm('Want to do the calculation again?');
  ask && ++count;
}
