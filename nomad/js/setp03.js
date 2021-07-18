const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;


const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

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

loginButton.addEventListener('click', handleLoginClick);