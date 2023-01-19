import addRemoveOption from "./removeOption";

let projectList = [
    {name: 'All tasks Project', id: 0, todoList: []},
];
let id = 1;


//PROJECT FACTORY
function ProjectFactory(name, id) {
    let todoList = [];
    return {
        name,
        id,
        todoList
    }
}


//Project Event Listeners
function newProjectEvent() {
    const newProjectBtn = document.getElementById('newProject');
    newProjectBtn.addEventListener('click', showProjectForm);

    const submitProjectBtn = document.getElementById('submitProjectBtn');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.getElementById('projectNameInput').value == "") {
            alert('You should name it!');
            return
        }
        addProject();
        hideForm();
    });

    const cancelProjectBtn = document.getElementById('cancelProjectBtn');
    cancelProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideForm();
    });

    //All tasks button
    const allTodoBtn = document.getElementById('allTodos');
    allTodoBtn.addEventListener('click', () => {
        document.querySelector('.project-name').textContent = 'All Tasks:';
        clearTodoContainer();
        displayAllTodos();
    })
}


//Functions for buttons
function showProjectForm() {
    const form = document.getElementById('projectForm');
    form.classList.remove('hidden');
}

function addProject() {
    const name = document.getElementById('projectNameInput').value;

    const newProject = ProjectFactory(name, id);
    projectList.push(newProject);
    
    appendProject(name);
    id++;
}

function hideForm() {
    document.getElementById('projectNameInput').value = '';
    const form = document.getElementById('projectForm');
    form.classList.add('hidden');
}

function appendProject(name) {
    const project = document.createElement('div');
    project.classList.add('project-child');
    project.setAttribute('id', `${id}`);

    const nameBtn = document.createElement('button');
    nameBtn.setAttribute('id', 'nameBtn');
    nameBtn.textContent = name;

    project.appendChild(nameBtn);
    addRemoveOption(project);

    nameBtn.addEventListener('click', (e) => {
        const idNum = e.target.parentNode.id;
        projectTitleChange(idNum);
        appendTodoList(idNum);
    })

    document.getElementById('projectsContainer').appendChild(project);
}

function projectTitleChange(idNum) {
    const name = projectList[idNum].name;
    document.querySelector('.project-name').textContent = name;
}

function appendTodoList(idNum) {
    clearTodoContainer();

    for (let i = 0; i < projectList[idNum].todoList.length; i++) {
        const newTodo = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        const title = document.createElement('h2');
        const desc = document.createElement('p');
        const dueDate = document.createElement('div');

        title.textContent = projectList[idNum].todoList[i].title;
        desc.textContent = projectList[idNum].todoList[i].desc;
        dueDate.textContent = projectList[idNum].todoList[i].dueDate;

        newTodo.appendChild(checkbox);
        newTodo.appendChild(title);
        newTodo.appendChild(desc);
        newTodo.appendChild(dueDate);

        addRemoveOption(newTodo);

        todoContainer.appendChild(newTodo);
    }
}

function clearTodoContainer() {
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';
}

function displayAllTodos() {
    projectList.forEach((project) => {
        project.todoList.forEach((todo) => {
            const newTodo = document.createElement('div');

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const title = document.createElement('h2');
            const desc = document.createElement('p');
            const dueDate = document.createElement('div');

            title.textContent = todo.title;
            desc.textContent = todo.desc;
            dueDate.textContent = todo.dueDate;

            newTodo.appendChild(checkbox);
            newTodo.appendChild(title);
            newTodo.appendChild(desc);
            newTodo.appendChild(dueDate);

            addRemoveOption(newTodo);

            todoContainer.appendChild(newTodo);

        })
    })
}


export { newProjectEvent, projectList, projectTitleChange, displayAllTodos};