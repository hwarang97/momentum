const clock = document.querySelector('#clock');

function updateClock(){
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function formatTime(time){
    return String(time).padStart(2, '0');
}

updateClock();
setInterval(updateClock, 1000);
