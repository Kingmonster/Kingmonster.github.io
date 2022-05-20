const clockText = document.querySelector("#clock");

function displayTime() {
    const date = new Date();
    const strHours = String(date.getHours()).padStart(2, 0);
    const strMinutes = String(date.getMinutes()).padStart(2, 0);
    const strSeconds = String(date.getSeconds()).padStart(2, 0);

    clockText.innerText = `${strHours}:${strMinutes}:${strSeconds}`;    
}

displayTime();
setInterval(displayTime, 1000);