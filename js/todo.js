const TODO_KEY = 'todo';

const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
let toDoLists = [];


function ontoDoFormSubmit(event) {
    event.preventDefault();
    const toDoInput = toDoForm.querySelector('#todo-input');
    const todoInput = toDoInput.value;
    toDoInput.value = "";

    // object to be added
    const obj = {
        id: Date.now(),
        todo: todoInput,
    }

    // add to list
    addToDo(obj);

    // localstorage
    toDoLists.push(obj);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoLists));
}

function delelteToDo(event){
    const parentList = event.srcElement.parentElement;
    
    // remove li from todo list
    parentList.remove();

    // remove todo from toDoLists


    // update localstorage
    localStorage.getItem('todos', toDoLists);
}

function addToDo(todoInput){
    // li
    const newList = document.createElement('li');
    toDoList.appendChild(newList);

    // span
    const newToDo = document.createElement('span');
    newToDo.innerText = todoInput[TODO_KEY];
    newList.appendChild(newToDo);
    
    // button
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click', delelteToDo);
    newList.appendChild(button);    
}

toDoForm.addEventListener('submit', ontoDoFormSubmit);

const savedLocalToDos = localStorage.getItem(TODO_KEY);
if(savedLocalToDos){
    toDoLists = JSON.parse(savedLocalToDos);
    toDoLists.forEach(addToDo);
}
