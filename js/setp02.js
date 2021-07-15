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
console.log(`My name is ${first}${last}.`);

console.log(`1 + 2 = ${1 + 2}`); // `` 기호 사용하기
console.log('1 + 2 = ${1 + 2}'); // "",'' 기호 사용시 문자열로 반환

//블리언 타입 true, false
const fooTrue = true;
console.log(fooTrue); //true
const fooFalse = false;
console.log(fooFalse); //false

// undefined 타입
let fooUndifined; // 선언하지 않으면 undefined로 반환되나 강제적으로 undefined 할당이 아니라 null로 할당

//null 타입
let nullVar = null;
console.log(nullVar );

