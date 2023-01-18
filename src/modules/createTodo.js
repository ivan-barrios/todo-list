

const TodoFactory = (title, desc, date, priority) => {
    return {
        title,
        desc,
        date,
        priority
    };
};





function newTodoEvent() {
    const newTodoBtn = document.getElementById('newTodo');
    newTodoBtn.addEventListener('click', openForm);

    //More form btns
}


function createTodo(todoTitle, description, date, priority) {
    const todo = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const title = document.createElement('h2');
    const desc = document.createElement('p');
    const dueDate = document.createElement('p');

    title.textContent = todoTitle;
    desc.textContent = description;
    dueDate.textContent = date;

    todo.appendChild(checkbox);
    todo.appendChild(title);
    todo.appendChild(desc);
    todo.appendChild(dueDate);
    todo.style.backgroundColor = priority; //if 'important' (priority=red);

    addRemoveOption(todo);

    document.querySelector('.main-content').appendChild(todo);
}