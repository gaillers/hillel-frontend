//console.log(studentsMock.getStudent());
//console.log(studentsMock.getStudentList(10));
//.find в домашке (использывать).

const gradesArray = [];

do {
  elNumber = +prompt('Cколько элементов в массиве ты хочешь? min: 5 - max: 20');
} while (!(elNumber < 21 && elNumber > 4));

function getNumberArray(count) {
  for (let i = 0; i < count; i++) {
    let grade = +prompt('Ставь число.');
    gradesArray.push(grade);
  }

  return gradesArray;
}
//getNumberArray(elNumber);
// console.log(gradesArray);

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return arr;
}
//bubbleSort(gradesArray);
//console.log(bubbleSort(gradesArray));

function finishSort(element, array) {
  console.log('Обычный');
  getNumberArray(element);
  console.log(array);

  console.log('От сортировало');
  bubbleSort(array);
  console.log(bubbleSort(array));
}
finishSort(elNumber, gradesArray);
