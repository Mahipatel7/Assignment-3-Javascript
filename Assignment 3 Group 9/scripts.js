document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTask(todoText);
        todoInput.value = '';
        todoInput.focus();
    }
});

function addTask(text) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        li.remove();
        addTaskToDeletedList(text);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.classList.add('delete-button');
    completeButton.addEventListener('click', function() {
        li.remove();
        addTaskToCompletedList(text);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

function addTaskToCompletedList(text) {
    const completedList = document.getElementById('completed-list');
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('completed');
    completedList.appendChild(li);
}

function addTaskToDeletedList(text) {
    const deletedList = document.getElementById('deleted-list');
    const li = document.createElement('li');
    li.textContent = text;
    deletedList.appendChild(li);
}
