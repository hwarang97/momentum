const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
 

function ontoDoFormSubmit(event) {
    event.preventDefault();
    const toDoInput = toDoForm.querySelector('#todo-input');
    const todoInput = toDoInput.value;
    toDoInput.value = "";

    addToDo(todoInput);
}

function delelteToDo(event){
    const parentList = event.srcElement.parentElement;
    parentList.remove();
}

function addToDo(todoInput){
    const newList = document.createElement('li');
    const newToDo = document.createElement('span');
    newToDo.innerText = todoInput;
    newList.appendChild(newToDo);
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click', delelteToDo);
    newList.appendChild(button);
    toDoList.appendChild(newList);
}


toDoForm.addEventListener('submit', ontoDoFormSubmit);
