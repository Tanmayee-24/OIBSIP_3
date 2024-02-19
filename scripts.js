function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const pendingTasks = document.getElementById('pendingTasks');
      const li = document.createElement('li');
      const currentTime = new Date().toLocaleString();
      li.className = 'task-item';
      li.innerHTML = `
        <span>${taskText}</span>
        <span class="time">Created: ${currentTime}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      pendingTasks.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function completeTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.classList.add('completed');
    const completedTasks = document.getElementById('completedTasks');
    const currentTime = new Date().toLocaleString();
    taskItem.querySelector('.time').textContent = `Completed: ${currentTime}`;
    completedTasks.appendChild(taskItem);
  }
  
  function editTask(btn) {
    const taskItem = btn.parentNode;
    const newText = prompt('Edit task:', taskItem.querySelector('span').textContent);
    if (newText !== null) {
      taskItem.querySelector('span').textContent = newText;
    }
  }
  
  function deleteTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.remove();
  }
  