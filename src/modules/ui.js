import removeEvent from "./eventlisteners";



//ADDS A REMOVE BUTTON
function addRemoveOption(container) {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'R';

    removeEvent(container, removeBtn);

    container.appendChild(removeBtn);
}






//Creates a single Todo with the info given
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

//Creates a new project with name given
//To be used in input
function createProject(projectName) {
    const project = document.createElement('div');
    project.classList.add('project');
    const name = document.createElement('p');
    name.textContent = projectName;
    project.appendChild(name);

    addRemoveOption(project);

    document.querySelector('.projects').appendChild(project);
}

export {createProject, createTodo};