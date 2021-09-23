function init() {
  let arrayNumber = [];

  function getArray() {
    element = prompt('Введите массив чисел через пробел');
    arrayNumber = element.split(' ');

    console.log('Нынешний массив');
    console.log(arrayNumber);
    return arrayNumber;
  }
  getArray();

  function listOperationsArray() {
    do {
      menuOperationsArray =
        +prompt(`Выбирите операцию над массивом которую хотите выполнить.
   1 - отсортировать по возрастанию/убыванию
   2 - вывести все четные/нечетные
   3 - вывести сумму всех чисел, среднее арифметическое число, наибольшее/наименьшее
   `);
    } while (!(menuOperationsArray < 4 && menuOperationsArray > 0));
  }
  listOperationsArray();

  switch (menuOperationsArray) {
    case 1:
      console.log('По возрастанию');
      ascendingSort(arrayNumber);
      console.log(arrayNumber);

      console.log('По убыванию');
      descendingSort(arrayNumber);
      console.log(arrayNumber);
      break;

    case 2:
      let odd = arrayNumber.filter((el) => +el % 2 == 1);
      console.log('неЧетные', odd);

      let even = arrayNumber.filter((el) => +el % 2 == 0);
      console.log('четные', even);
      break;

    case 3:
      let avarage = arrayNumber.reduce((a, b) => (a + b)) / arrayNumber.length;
      console.log(avarage)
      break;
  }

  // отсортировать по возрастанию/убыванию //
  function ascendingSort(arr) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > +arr[i + 1]) {
          let temp = +arr[i];
          arr[i] = +arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
  function descendingSort(arr) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (+arr[i] > +arr[i - 1]) {
          let temp = +arr[i];
          arr[i] = +arr[i - 1];
          arr[i - 1] = temp;
        }
      }
    }
    return arr;
  }

  let operator = prompt('разделитель (опционально для некоторых операций)');
  alert(arrayNumber.join(operator));
  console.log(arrayNumber.join(operator));

}

let news;
do {
  init();
  news = confirm('Хотите ли вы продолжить?')
} while (news)

