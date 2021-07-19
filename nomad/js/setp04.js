function getClock() {
    const colck = document.querySelector('h2#clock');
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    colck.innerText = `${hour}:${minutes}:${seconds}`;
    //setInterval(getClock, 1000);
}
getClock();
// setInterval(sayHello, 5000);

function quotesFun() {
    const quotes = [
        {
            quote : '1',
            author : '11',
        },
        {
            quote : '2',
            author : '22',
        },
        {
            quote : '33',
            author : '333',
        },
        {
            quote : '4',
            author : '44',
        },
        {
            quote : '5',
            author : '55',
        },
        {
            quote : '6',
            author : '66',
        },
        {
            quote : '7',
            author : '77',
        },
        {
            quote : '8',
            author : '88',
        },
        {
            quote : '9',
            author : '9',
        },
        {
            quote : '10',
            author : '100',
        },
    ];
    
    const quote = document.querySelector('#quotes p:first-child');
    const author = document.querySelector('#quotes p:last-child');
    
    //console.log(`${Math.random() * 10}, ${Math.round(1.4)}, ${Math.ceil(1.01)}, ${Math.floor(1.9999)}`);
    todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todayQuotes.quote;
    author.innerText = todayQuotes.author;
}
quotesFun(); 

function bgFun() {
    const images = ['red', 'blue', 'tomato'];
    const choseImage = images[Math.floor(Math.random() * images.length)];
    const bgImageDiv = document.querySelector('#bgColor');
    bgImageDiv.style.backgroundColor = choseImage;
}
bgFun();


const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDolist = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function savToDos() {
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event) {
    event.preventDefault();
    const parentTxt = event.target.parentElement;
    parentTxt.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentTxt.id));
    console.log(typeof parentTxt.id);
    savToDos();
}

function paintToDo(newTodo) {
    //console.log(`${newTodo}`);
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    li.appendChild(span);
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

const API_KEY = '7936ee6492a0e5baaf5bfcc07380fc97';
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert('no weather');
}

const locationNow = navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

