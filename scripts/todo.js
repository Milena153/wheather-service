 document.getElementById('addTaskButton').addEventListener('click', addTask);

 function addTask() {
   const taskInput = document.getElementById('taskInput');
   
   if (taskInput.value.trim() === '') {
       alert('Пожалуйста, введите задачу.');
       return;
   }

   const taskList = document.getElementById('taskList');
   
   const li = document.createElement('li');
   li.className = 'li-decorate';
   
   li.textContent = taskInput.value;

   // Добавление кнопки для удаления
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Удалить';
   deleteButton.className = 'delete-button';
   
   deleteButton.addEventListener('click', function() {
       taskList.removeChild(li);
   });

//Добавление для отметки задачи как выполненной
const doneButton = document.createElement('button');
  doneButton.textContent = 'Готово';
  doneButton.className = 'done-button';

  // Обработчик для "Готово"
  doneButton.addEventListener('click', function() {
    li.classList.toggle('done');
    li.classList.toggle('completed');
  });
  li.addEventListener('click', function(e) {
    if (e.target !== doneButton && e.target !== deleteButton) {
      li.classList.toggle('completed');
    }
  });
   li.appendChild(doneButton);
   li.appendChild(deleteButton);
   taskList.appendChild(li);
   
   taskInput.value = ''; // Очистка ввода
}