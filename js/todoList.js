const todolistForm = document.querySelector("#todolist-form");
const todolistInput = todolistForm.querySelector("input");
const todolistElem = document.querySelector("#todolist");
let todolist = [];

const TODO_KEY = "todo";

function loadToDoList()
{
    const prevToDoList = localStorage.getItem(TODO_KEY);
    
    if( prevToDoList !== null ) {
        todolist = JSON.parse(prevToDoList);
        todolist.forEach(displayToDo);
    }
}

function displayToDo(itemObj) {
    
    console.log(itemObj["value"]);
    const li = document.createElement("li");
    li.id = itemObj.id;

    const spanElem = document.createElement("span");
    spanElem.innerText = itemObj.value;
    
    const buttonElem = document.createElement("button");
    buttonElem.innerText = "❌";
    buttonElem.addEventListener("click", deleteToDo);

    li.appendChild(buttonElem);
    li.appendChild(spanElem);    

    todolistElem.appendChild(li);
}

function deleteToDo(event)
{    
    const li = event.target.parentElement;

    if( li !== null ) {        
        const filteredArray =  todolist.filter(item => { 
            return item.id !== parseInt(li.id)} );
        todolist = filteredArray;
        saveToLocalStorage();
        li.remove();
    }    
}

function addToDo(todo)
{   
    const itemObj = {
        id:Date.now(),
        value:todo
    };

    todolist.push(itemObj);
    saveToLocalStorage();
    displayToDo(itemObj);
}

function saveToLocalStorage()
{
    localStorage.setItem(TODO_KEY, JSON.stringify(todolist));
}

function submitToDoEvent(event)
{
    event.preventDefault();    
    
    addToDo(todolistInput.value);
    todolistInput.value = "";
}

todolistForm.addEventListener("submit", submitToDoEvent);

loadToDoList();