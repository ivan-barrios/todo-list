

//Removes complete container
function removeEvent(container, btn) {
    btn.addEventListener('click', () => {
        container.remove();
    });
}

export default removeEvent;