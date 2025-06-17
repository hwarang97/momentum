const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(event){
    event.preventDefault();
    const name = loginForm.querySelector('input');
    const userName = name.value;
    localStorage.setItem('username', userName);
    greeting.innerText = `Hello, ${userName}!`;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem('username');
if(savedUserName){
    greeting.innerText = savedUserName;
}
