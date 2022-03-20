const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

// 숫자 타입
const integer = 10; //정수
const double = 10.12; //실수
const negative = -20; // 음의정수

console.log(integer, double, negative);

const binary = 0b01000001; // 2진수
const octal = 0o101; // 8진수
const hex = 0x41; // 10진수

console.log(binary, octal, hex); // 65
console.log(binary === octal); // ture
console.log(octal === hex); // true

const template = '<ul>\n\t<li><a href="javascript:;"></a></li>\n</ul>';
console.log(template);

let first = 'sting';
let last = '01';

console.log('My name is ' + first + '' + last + '.'); //es5
console.log(`My name is ${first}${last}.`); //es6

console.log(`1 + 2 = ${1 + 2}`); // `` 기호 사용하기
console.log('1 + 2 = ${1 + 2}'); // "",'' 기호 사용시 문자열로 반환

//블리언 타입 true, false
const fooTrue = true;
console.log(fooTrue); //true
const fooFalse = false;
console.log(fooFalse); //false

// undefined 타입
let fooUndifined; // 선언하지 않으면 undefined로 반환되나 강제적으로 undefined 할당이 아니라 null로 할당

//null 타입, null은 대체 불가
let nullVar = null;
console.log(nullVar ); // null

let element = document.querySelector('.myClass');
// html 문서에 클래스 요소가 없으면 null을 반환한다
console.log(element); // null

// simbol 타입 : 유일무이한 값:다른값과 중복 불과
let key = Symbol('key'); // 심볼 갑 생성
console.log(typeof key); // Symbol

let obg = {};
// 이름이 충돌할 위험이 있는 유일무이한 값이므로 심벌을 프로퍼티 키로 사용합니다.
obg[key] = 'value'; 
console.log(obg[key]); 

// 테이터 타입
const score = 100; // 변수에 할당된 값

//동적 타이핑
let foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'hello'; // string
console.log(typeof foo); // number

foo = true; // boolean
console.log(typeof foo); // boolean

foo = null; // null 은 대체 불가
console.log(typeof foo); // Object

foo = Symbol(); // symbol
console.log(typeof foo); // Object

foo = {}; // 객체 선언
console.log(typeof foo); // Object

foo = [] // 배열 선언
console.log(typeof foo); // Object

foo = function () {} // function
console.log(typeof foo); // function






