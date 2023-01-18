




//Creates a new project with name given
//To be used in input
function createProject(projectName) {
    const project = document.createElement('div');
    project.classList.add('project');
    const name = document.createElement('p');
    name.textContent = projectName;
    project.appendChild(name);

    addRemoveOption(project);

    appendProjectEvent(project);

    document.querySelector('.projects').appendChild(project);
}
