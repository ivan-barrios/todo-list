import removeEvent from "./eventlisteners";




//Parameters come from a form (When a project is added) 
//To be exported to form
function createProject(projectName) {
    const project = document.createElement('div');
    project.textContent = projectName;

    addRemoveOption(project);

    document.querySelector('.projects').appendChild(project);
}


function addRemoveOption(project) {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'R';

    removeEvent(project, removeBtn);

    project.appendChild(removeBtn);
}

export default createProject;