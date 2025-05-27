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

   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Удалить';
   deleteButton.className = 'delete-button';
   
   deleteButton.addEventListener('click', function() {
       taskList.removeChild(li);
   });


const doneButton = document.createElement('button');
  doneButton.textContent = 'Готово';
  doneButton.className = 'done-button';


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
   
   taskInput.value = ''; 
}

document.addEventListener('DOMContentLoaded', () => {
  let styleMode = localStorage.getItem('styleMode');

  const activateDarkStyle = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('styleMode', 'dark');
  };

  const deactivateDarkStyle = () => {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('styleMode');
  };

  const styleButton = document.querySelector('.menu__item-btn');
  if (styleButton) {
    styleButton.addEventListener('click', () => {
      styleMode = localStorage.getItem('styleMode');
      if (styleMode !== 'dark') {
        activateDarkStyle();
      } else {
        deactivateDarkStyle();
      }
    });
  }

  if (styleMode === 'dark') {
    activateDarkStyle();
  }
});