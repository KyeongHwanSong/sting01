const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;


const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

// 반복되는 스트링은 미리 지정해서 사용 , 대문자로 
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function handleLoginClick() {
    const username = loginInput.value;
    if (username === '') {

    } else if (username.length > 15) {
        console.log('ling');
    }
    else {
        console.log(username);
    }
    console.log(username);
    
}

// loginButton.addEventListener('click', handleLoginClick);

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeeting(userName);
}

const link = document.querySelector('a');
function handleLink(event) {
    event.preventDefault();
    console.dir(event);
}

function paintGreeeting(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`
}

link.addEventListener('click', handleLink);

const saveUserName = localStorage.getItem(USERNAME_KEY);
console.log(saveUserName);
if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreeeting(saveUserName);
}