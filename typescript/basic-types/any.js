"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴 결과는 아무거나');
//어떤 역할을 하든 아무런 지장이 없음, 되도록이면 쓰지 않는게 좋음,
any1.toString();
function anyNone(message) {
    console.log(message);
}
const any2 = anyNone('지정해서 쓰자');
any2;
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
