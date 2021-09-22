/** ДЗ 2. Калькулятор V1 **/

// let finishCalculationsTitle = 'Calculations are finished!'

// let oneNumber = Number(prompt('Введите первое число'));
// let twoNumber = Number(prompt('Введите второе число'));

// let calc = {
//    sum: (oneNumber + twoNumber),
//    diff: (oneNumber - twoNumber),
//    mult: (oneNumber * twoNumber),
//    div: (oneNumber / twoNumber)
// };

// let result = finishCalculationsTitle + `
// Sum: ${oneNumber + ' + ' + twoNumber + ' = ' + calc.sum}
// Diff: ${oneNumber + ' - ' + twoNumber + ' = ' + calc.diff}
// Mult: ${oneNumber + ' * ' + twoNumber + ' = ' + calc.mult}
// Div: ${oneNumber + ' / ' + twoNumber + ' = ' + calc.div}
// `

// alert(result);
// console.log(result);

/** ДЗ 2. Калькулятор V1.2 **/

let oneNumber = prompt('Введите первое число');
oneNumber = Number(oneNumber);

let twoNumber = prompt('Введите второе число');
twoNumber = Number(twoNumber);

let operator = prompt('Oператор (+ , - , / , *)');

switch (operator) {
  case '+':
    alert(oneNumber + twoNumber);
    break;
  case '-':
    alert(oneNumber - twoNumber);
    break;
  case '/':
    alert(oneNumber / twoNumber);
    break;
  case '*':
    alert(oneNumber * twoNumber);
}
