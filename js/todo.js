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
    const li = event.srcElement.parentElement;
    console.log(toDoLists)

    // remove todo from toDoLists
    toDoLists = toDoLists.filter((obj) => String(obj.id) !== li.id)
    
    // remove li from todo list
    li.remove();

    // update localstorage
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoLists));
}

function addToDo(todoInput){
    // li has span and button
    const newList = document.createElement('li');
    newList.id = todoInput['id'];
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
