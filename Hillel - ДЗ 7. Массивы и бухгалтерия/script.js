function init() {
  let menuOperationsArray;
  let arrayNumber = [];

  function getArray() {
    let array = [];
    const element = prompt('Введите массив чисел через пробел');
    array = element.split(' ').map(el => +el);

    console.log('Нынешний массив');
    console.log(array);
    return array;
  }

  arrayNumber = getArray();
  
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

      arrayNumber?.sort((a, b) => a - b)
      console.log(arrayNumber);

      console.log('По убыванию');
      arrayNumber?.sort((a, b) => b - a)

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

  let operator = prompt('разделитель (опционально для некоторых операций)');
  alert(arrayNumber.join(operator));
  console.log(arrayNumber.join(operator));

}

let news;
do {
  init();
  news = confirm('Хотите ли вы продолжить?')
} while (news)

// до делать