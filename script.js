const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoColumn = document.getElementById('todo');

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const task = document.createElement('div');
  task.className = "task " + prioritySelect.value;
  task.textContent = text;

  todoColumn.appendChild(task);
  taskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);