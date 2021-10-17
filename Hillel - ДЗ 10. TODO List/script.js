(() => {
   const btnAdd = document.getElementById('button-add');
   const deskTaskInput = document.getElementById('text-todo');
   const todoList = document.querySelector('.todo-list');  
   

   btnAdd.addEventListener('click', () => {
     const newTask = document.createElement('div');
     newTask.innerHTML = `
     <div class="todo-item">
        <div class="description">${deskTaskInput.value}</div>
      </div>
    `;
    
     deskTaskInput.value = '';
     todoList.prepend(newTask);
   });

})();



{/* <div class="buttons">
          <input id="btn-complate" class="btn-complate" type="checkbox">
          <button id="btn-delete" class="btn-delete">Delete</button>
        </div> */}