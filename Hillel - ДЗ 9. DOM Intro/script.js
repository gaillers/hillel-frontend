function reset() {
   let output = document.getElementById('text').value;
   console.log(output)

   document.getElementById("text").value = '';
}

// Решение дз на 100

// (() => {
//    const btnAdd = document.getElementById('button-add');
//    const inputList = document.getElementById('text-todo');
 
//    btnAdd.onclick = () => {
//      console.log(inputList.value);
//      inputList.value = '';
//    };
//  })();