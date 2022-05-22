const API_KEY = "fb0786b367c5d24c2de99aa2571cd8f2";
const weatherDiv = document.querySelector("#weather-div");
const tempertureElem = document.querySelector("#temperture");
const tempertureMinElem = tempertureElem.querySelector("span #min")
const tempertureMaxElem = tempertureElem.querySelector("span #max")
const humidityElem = weatherDiv.querySelector("#humidity");
const weatherElem = weatherDiv.querySelector("#weather");
const weatherIconElem = weatherElem.querySelector("img");
const weatherTextElem = weatherElem.querySelector("span");
const positionElem  = weatherDiv.querySelector("#position");

// console.log(weatherElem, weatherTextElem, weatherIconElem);
function displayWeather(info) {
    tempertureMaxElem.innerText = `최고 : ${Math.ceil(info.main.temp_max)}℃`;
    tempertureMinElem.innerText = `최저 : ${Math.ceil(info.main.temp_min)}℃`;
    humidityElem.innerText = `습도 : ${info.main.humidity}%`;
    weatherTextElem.innerText = `날씨 : ${info.weather[0].main}`;
    weatherIconElem.src = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`;
    positionElem.innerText = `위치 : ${info.name} ${info.sys.country}`;
}

function successCallback(position) {
    const lat = position.coords.latitude;
    const lon =  position.coords.longitude;    
    const part = "current";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(Response => Response.json()).then((data) => displayWeather(data));
}

function errorCallback(event) {    
    alert("It can't be received the position");
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

