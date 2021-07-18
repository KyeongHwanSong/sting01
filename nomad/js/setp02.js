const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

console.dir(document.body);

console.log(document.title = 'hi');

const title = document.getElementsByName('title');
console.dir(title.className);