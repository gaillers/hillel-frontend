const fibsNumber = +prompt('Введите число для ряда Фибоначчи')

function fib(number) {
    return number <= 1 ? number : fib(number - 1) + fib(number - 2);
}
fib(fibsNumber); 
console.log(fib(fibsNumber))