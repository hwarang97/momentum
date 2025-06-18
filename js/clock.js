const clock = document.querySelector('#clock');

function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();
