const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

const docuWIndow = document.querySelectorAll('html');
for (let i = 0; docuWIndow.length > i; i++){
    console.log(i);
    docuWIndow[i].style.backgroundColor = 'black';
}