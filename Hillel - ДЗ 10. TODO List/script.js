(() => {
  const btnAdd = document.getElementById('btn-add');
  const deskTaskInput = document.getElementById('text-todo');
  const todoList = document.querySelector('.todo-list');

  btnAdd.addEventListener('click', (index) => {
    const deskTaskContent = deskTaskInput.value;
    if (!deskTaskContent) return;

    const newTask = document.createElement('div');
    newTask.innerHTML = `
     <div class="todo-item">
        <div class="description">${deskTaskContent}</div>
        <div class="buttons">
          <input onclick="completeTask(${index})" id="btn-complate" class="btn-complate" type="checkbox">
          <button onclick="deleteTask(${index})" id="btn-delete" class="btn-delete">Delete</button>
        </div>
      </div>
    `;

    deskTaskInput.value = '';
    todoList.prepend(newTask);
  });
})();
