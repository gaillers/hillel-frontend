const fib = +prompt('Введите число для ряда Фибоначчи')

const fibCals = function (fib) {
  let myArr = [];

  for (let i = 0; i < fib; i++) {
      if(i < 2) {
          myArr.push(i);
      } else {
          myArr.push(myArr[i-2] + myArr[i-1]);
      }
  } 
  return myArr;
}

console.log(fibCals(fib));