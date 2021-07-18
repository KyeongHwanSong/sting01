const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

// 제어문
{
    let foo = 10;
}

let x = 1;
if (x < 10) {
    x++;
}

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

if (document.getElementsByTagName('html').length > 0){
    true;
    console.log(true);
}else {
    false;
    console.log(false);
}

let num = 2; 
let kind;
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '영'
}else {
    kind = '음수';
}
console.log(kind);

let y = 2;
let result;

if (y % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result);

let z = 2;
let result2 = z % 2 ? '홀수' : '짝수' ;
console.log(result2); 
// let kind = num ? (num > 0 ? '양수' : '음수') : '영';
// if else 문으로 변경
// console.log(kind); 