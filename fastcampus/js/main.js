const boxEl = document.querySelector('.box');
const boxEls = document.querySelectorAll('.box');
console.log(boxEl.textContent);

boxEl.textContent = 'text!! string';

boxEls.forEach((elm, index) => {
    elm.textContent = `string ${index}`;
    elm.classList.add(`cls-0${index}`)
});

const a = 'hello~';

const b = a.split('').reverse().join(''); //''으로 문자를 자르고 꺼꾸로 선언 후 배열 기준으로 문자를 변환해 반환

console.log(a);
console.log(b);


// 카멜케이스
// theQuickBrownFox

let fruits = ['apple', 'banana']; //array
console.log(fruits[1]);
const fal = false;
console.log(fal);

// {} //객체 Object

let obj = {abc : 123};
console.log(obj.abc);

// return a + n;// 데이터 반환

function sum(a, b) { // a,b 매개변수
    return a + b;
};

let abs = function() { //익명함수

};

const hello = function() {};
hello();

const user = {
    getName : () => {} // 메소드
}
console.log(user.getName());

if(true) {
 
}

// defer

const boxEeel = document.querySelector('.box');
boxEeel.textContent = 'boxEeel.textContent';

let letKeyword;
console.log(letKeyword);

const boxClick = document.querySelector('.box');
function boxClickFunc() {
    console.log('Hello~');
}
boxClick.addEventListener('click', boxClickFunc);

const boxDiv = document.querySelectorAll('div');
boxDiv.forEach((el, index) => {
    el.classList.add('hello');
});

let chainMathod = 'he'.split('').reverse().join('');
console.log(chainMathod);

const boxActive = document.querySelector('div');
if(!boxActive.classList.contains('active')){
    console.log('없음');
}
