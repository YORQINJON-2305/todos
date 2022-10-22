const clearIcon = document.querySelector('#clear__icon');
const taskInput = document.querySelector('.todolist__input');
const taskForm = document.querySelector('.todolist__form');
const taskCollection = document.querySelector('.task__collection');
const deleteAll = document.querySelector('.delete__all');
const search = document.querySelector('#search');

clearIcon.addEventListener('click', clearInputValue);
taskForm.addEventListener('submit', addNewTask);

function addNewTask(evt){
    evt.preventDefault();
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const taskLi = document.createElement("li");
    taskLi.className = "task_li";
    const input = document.createElement('input');
    const deleteIcon = document.createElement('i');
    const completeIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const iconWrapper = document.createElement('div');
    const timeP = document.createElement('p');
    timeP.innerHTML = hour + ":" + minute;
    completeIcon.className = "far fa-check-circle";
    deleteIcon.className = "fas fa-times";
    editIcon.className = "far fa-edit"
    input.value = taskInput.value.toUpperCase();
    input.setAttribute('readonly', true)
    iconWrapper.appendChild(timeP);
    iconWrapper.appendChild(editIcon);
    iconWrapper.appendChild(completeIcon);
    iconWrapper.appendChild(deleteIcon);
    taskLi.appendChild(input);
    taskLi.appendChild(iconWrapper);
    taskCollection.appendChild(taskLi);

    deleteAll.addEventListener('click', () => {
        taskCollection.innerHTML = "";
    });

    editIcon.addEventListener('click', () => {
        if(input.hasAttribute("readonly")){
            input.removeAttribute('readonly');
            input.style.border = "1px solid #c4c4c4";
            input.focus();
        }
        else{
            input.setAttribute('readonly', true);
            input.style.border = "1px solid transparent";
        }
    })

    deleteIcon.addEventListener('click', (evt) => {
        evt.target.parentElement.parentElement.remove();
    })

    console.log(taskLi);
    taskInput.value = "";


}

function clearInputValue(){
    taskInput.value = "";
}

search.addEventListener('keyup', searchTasks)

function searchTasks(){
    let searchedWord = search.value.toLowerCase();
    const allTaskWords = document.querySelectorAll('.task_li');
    allTaskWords.forEach(task => {
        if(task.firstChild.value.toLowerCase().indexOf(searchedWord) !== -1){
            task.style.display = "flex";
        }
        else{
            task.style.display = "none";
        }
    })
}