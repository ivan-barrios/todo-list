import addRemoveOption from "./removeOption";
import { projectList, projectTitleChange, displayAllTodos } from "./createProject";


//TODO FACTORY
const TodoFactory = (title, desc, date) => {
    return {
        title,
        desc,
        date
    };
};


//Form Event Listeners
function newTodoEvent() {
    const newTodoBtn = document.getElementById('newTodo');
    newTodoBtn.addEventListener('click', openForm);

    const todoCancelBtn = document.querySelector('.todoCancelBtn');
    todoCancelBtn.addEventListener('click', (e) => {
        hideForm(e);
    });

    const todoAddBtn = document.querySelector('.todoAddBtn');
    todoAddBtn.addEventListener("click", (e) => {
        if (document.getElementById('todoTitleInput').value == "") {
            alert('You should name it!');
            return
        }
        processForm(e);
        hideForm(e);
    });
}


//Functions from the Event Listeners
function openForm() {
    const form = document.getElementById('newTodoForm');
    form.classList.remove('hidden');
}

function hideForm(e) {
    e.preventDefault();
    const form = document.getElementById('newTodoForm');
    document.getElementById('todoTitleInput').value = '';
    document.getElementById('todoDescInput').value = '';
    document.getElementById('todoDateInput').value = '';

    form.classList.add('hidden');
}


//Processes the form values
function processForm(e) {
    e.preventDefault();
    
    const title = document.getElementById('todoTitleInput').value;
    const desc = document.getElementById('todoDescInput').value;
    const date = document.getElementById('todoDateInput').value;

    const newTodo = TodoFactory(title, desc, date);

    const currentProjectName = document.querySelector('.project-name').textContent;
    const currentProject = projectList.find(project => project.name == currentProjectName);
    const index = projectList.indexOf(currentProject);

    //DESPUES TENES QUE ARREGLARLO PARA QUE FUNCIONE EL ALL TASKS
    if (index !== -1) {
        projectList[index].todoList.push(newTodo);
        addTodo(title, desc, date);
    }
    else {
        projectList[0].todoList.push(newTodo);
        console.log(projectList[0].todoList);
        projectTitleChange(0);
        displayAllTodos;
        addTodo(title, desc, date);
    }
}


function addTodo(formTitle, formDesc, formDate) {
    const todoContainer = document.getElementById('todoContainer');

    const newTodo = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const title = document.createElement('h2');
    const desc = document.createElement('p');
    const dueDate = document.createElement('div');

    title.textContent = formTitle;
    desc.textContent = formDesc;
    dueDate.textContent = formDate;

    newTodo.appendChild(checkbox);
    newTodo.appendChild(title);
    newTodo.appendChild(desc);
    newTodo.appendChild(dueDate);

    addRemoveOption(newTodo);

    todoContainer.appendChild(newTodo);

}


export { newTodoEvent };