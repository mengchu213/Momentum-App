const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const todoPanel = document.querySelector('.todo-panel');
const todoList = document.querySelector('.todo-list');
const addTodoForm = document.querySelector('.add-todo-form');
const addTodoInput = document.querySelector('.add-todo-input');

let todos = [];

const savedTodos = localStorage.getItem('todos');
if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
}

openButton.addEventListener('click', () => {
  todoPanel.classList.add('open');
});

closeButton.addEventListener('click', () => {
  todoPanel.classList.remove('open');
});

function renderTodoItem(todo, index) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.classList.add('todo-checkbox');
  todoCheckbox.checked = todo.completed;

  const todoLabel = document.createElement('label');
  todoLabel.classList.add('todo-label');
  todoLabel.textContent = todo.text;

  if (todo.completed) {
    todoLabel.classList.add('strikethrough');
  }

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoLabel);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoCheckbox.addEventListener('change', () => {
    todos[index].completed = !todos[index].completed;
    if (todos[index].completed) {
      todoLabel.classList.add('strikethrough');
    } else {
      todoLabel.classList.remove('strikethrough');
    }
    saveTodos();
  });

  deleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    renderTodos();
    saveTodos();
  });

  editButton.addEventListener('click', () => {
    const newText = prompt('Enter new text:', todo.text);
    if (newText !== null) {
      todos[index].text = newText;
      renderTodos();
      saveTodos();
    }
  });
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    renderTodoItem(todo, index);
  });
}

addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = addTodoInput.value.trim();
  if (todoText !== '') {
    todos.push({
      text: todoText,
      completed: false
    });
    addTodoInput.value = '';
    renderTodos();
    saveTodos();
  }
});

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

$(todoPanel).draggable({
  handle: '.title',
  drag: function(event, ui) {
    var left = ui.position.left;
    var top = ui.position.top;
    $(this).css('left', left);
    $(this).css('top', top);
  }
});

new Sortable(todoList, {
  animation: 150,
  handle: '.todo-label',
  ghostClass: 'sortable-ghost',
  fallbackOnBody: true,
  swapThreshold: 0.5
});

renderTodos();
