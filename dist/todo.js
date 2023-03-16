const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const todoPanel = document.querySelector('.todo-panel');
const todoList = document.querySelector('.todo-list');
const addTodoForm = document.querySelector('.add-todo-form');
const addTodoInput = document.querySelector('.add-todo-input');

let todos = [];

// Load the todos from local storage, if available
const savedTodos = localStorage.getItem('todos');
if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
}

// Event listener for opening the todo panel
openButton.addEventListener('click', () => {
  todoPanel.classList.add('open');
});

// Event listener for closing the todo panel
closeButton.addEventListener('click', () => {
  todoPanel.classList.remove('open');
});

// Function to render the todo items on the page
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
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
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    // Event listener for toggling the completed state of a todo
    todoCheckbox.addEventListener('change', () => {
      todos[index].completed = !todos[index].completed;
      if (todos[index].completed) {
        todoLabel.classList.add('strikethrough');
      } else {
        todoLabel.classList.remove('strikethrough');
      }
      saveTodos();
    });

    // Event listener for deleting a todo
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
      saveTodos();
    });

    // Event listener for editing a todo
    editButton.addEventListener('click', () => {
      const newText = prompt('Enter new text:', todo.text);
      if (newText !== null) {
        todos[index].text = newText;
        renderTodos();
        saveTodos();
      }
    });
  });
}

// Event listener for submitting the add todo form
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

// Save the todos to local storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

renderTodos();
