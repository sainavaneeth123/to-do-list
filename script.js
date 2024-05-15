const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(todoItem);
    
    const deleteButton = todoItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });
}