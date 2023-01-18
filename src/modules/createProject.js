import addRemoveOption from "./removeOption";

let projectList = [];


//Project Event Listeners
function newProjectEvent() {
    const newProjectBtn = document.getElementById('newProject');
    newProjectBtn.addEventListener('click', showProjectForm);

    const addProjectBtn = document.getElementById('submitProjectBtn');
    addProjectBtn.addEventListener('click', (e) => {
        addProject(e);
        hideForm(e);
    });

    const cancelProjectBtn = document.getElementById('cancelProjectBtn');
    cancelProjectBtn.addEventListener('click', (e) => {
        hideForm(e);
    });
}

function showProjectForm() {
    const form = document.getElementById('projectForm');
    form.classList.remove('hidden');
}


function addProject(e) {
    e.preventDefault();

    const nameInput = document.getElementById('projectNameInput').value;

    const newProject = ProjectFactory(nameInput);

    projectList.push(newProject);

    appendProject(nameInput);
}


function hideForm(e) {
    e.preventDefault();
    document.getElementById('projectNameInput').value = '';
    const form = document.getElementById('projectForm');
    form.classList.add('hidden');
}


function appendProject(name) {
    const project = document.createElement('div');
    const nameP = document.createElement('p');
    nameP.setAttribute('id', 'pName');
    nameP.textContent = name;

    project.appendChild(nameP);
    addRemoveOption(project);

    project.addEventListener('click', (event) => {
        projectTitleChange(event);
    })

    document.getElementById('projects').appendChild(project);
}

function projectTitleChange(e) {
    const name = e.target.innerText;
    document.querySelector('.project-name').textContent = name;
}



//PROJECT FACTORY
function ProjectFactory(name) {
    let todoList = [];
    return {
        name,
        todoList
    }
}



export { newProjectEvent, projectList };