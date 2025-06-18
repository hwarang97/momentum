const API_KEY = "";

const weather = document.querySelector('#weather');

function paintWeather(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => weather.innerText = `${data.weather[0].main} ${data.main.temp}`);
}

navigator.geolocation.getCurrentPosition(paintWeather, () => console.log("Sorry, Weather service does not supported."));
