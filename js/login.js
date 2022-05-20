const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#greeting");

const NAME_KEY = "name";
const HIDDEN_CLASS = "hidden";

function displayGreeting() {
    loginForm.classList.add(HIDDEN_CLASS);
    loginGreeting.innerText = `Hello! ${localStorage.getItem(NAME_KEY)}`;
    loginGreeting.classList.remove(HIDDEN_CLASS);
}

function submitLoginformEvent(event)
{
    event.preventDefault();    
    localStorage.setItem(NAME_KEY, loginInput.value);    

    displayGreeting();
}

console.log(localStorage.getItem(NAME_KEY));

if( localStorage.getItem(NAME_KEY) === null )
{
    loginForm.classList.remove(HIDDEN_CLASS);
    loginGreeting.classList.add(HIDDEN_CLASS);
    loginForm.addEventListener("submit", submitLoginformEvent);    }
else {
    
    displayGreeting();
}

