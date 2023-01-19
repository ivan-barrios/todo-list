//Removes complete container
function removeEvent(container, btn) {
    btn.addEventListener('click', () => {
        container.remove();
    });
}

//ADDS A REMOVE BUTTON
function addRemoveOption(container) {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'X';

    removeEvent(container, removeBtn);

    container.appendChild(removeBtn);
}

export default addRemoveOption;