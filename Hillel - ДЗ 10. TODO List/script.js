(() => {
  const btnAdd = document.getElementById('btn-add');
  const deskTaskInput = document.getElementById('text-todo');
  const todoList = document.querySelector('.todo-list');

  btnAdd.addEventListener('click', () => {
    const deskTaskContent = deskTaskInput.value;
    if (!deskTaskContent) return;

    const newTask = document.createElement('div');
    newTask.classList.add('todo-item');
    newTask.innerHTML = `
      <div class="description">${deskTaskContent}</div>
      <div class="buttons">
        <input id="btn-complate" class="btn-complate" type="checkbox">
        <button id="btn-remove" class="btn-remove">Delete</button>
       </div>
      `;

    deskTaskInput.value = '';
    todoList.prepend(newTask);

    const complateTask = document.getElementById('btn-complate');
    complateTask.addEventListener('change', () => {
      newTask.classList.toggle('checked');
    });

    const removeTask = document.getElementById('btn-remove');
    removeTask.addEventListener('click', () => {
      newTask.remove();
    });

  });
  
})();
