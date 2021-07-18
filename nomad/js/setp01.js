const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

console.log(5454545);

console.log('kakakakak');

const a = 10;
const b = 2;
let myName = 'nico';
const veryLongVariableNmae = 0;

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log('hello ' + myName);

myName = 'nicolas';
console.log('your new name is ' + myName);

const amIFat = true; // true, false
console.log(amIFat);

const amIFat2 = null; //null
let something; //undefined
console.log(something, amIFat2);

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thr = 'thr';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const daysOfWEek = ['mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat' , 'sun'];
console.log(daysOfWEek[5]);
//add day array
daysOfWEek.push('sun');
console.log(daysOfWEek);

const nonsense = [1, 2, 'hello', false , null, true, undefined, 'nico'];
console.log(nonsense);

const toBuy = ['potato', 'tomato'];
toBuy.push('pizza');
console.log(toBuy);

const playerName = 'nico';
const playerPints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

// player.myName
// player.points
// plyaer.handsome

//const player = ['nico', 1212, flase, 'little bit'];

const player = {
    name : 'nico',
    points : 1212,
    hansome : false,
    sayHi : function(otherPersonsName) {
        console.log('hello! ' + otherPersonsName);
    }
};
console.log(player.hansome);
player.fat = false;
player.lastName = 'potato';
player.points = player.points + 15;
player.sayHi('lun');
console.log(player);

function sayHello(nameOfPerson, age = 0) {
    console.log('hello my name is ' + nameOfPerson, age);
}

sayHello('nico', 11);
sayHello('dal');
sayHello('lynn');

function plus(a, b) {
    return a + b;
}
console.log(plus(1, 2));

function divide(a, b) {
    return (a / b);
}
console.log(divide(4, 2));

const aa = 5;
let isNicoFat = true;
console.log(aa);
isNicoFat = false;
console.log(aa);

const calculator = {
    add : function (a, b =0) {
        return a + b
    },
    minus : function (a, b) {
        return a - b;
    },
    multiply : function (a, b) {
        return a * b;
    },
    division : function (a, b) {
        return a / b;
    },
    powoerof : function (a, b) {
        return a ** b;
    },
}
calculator.add(1, 2);
calculator.minus(1, 2);
calculator.multiply(1, 2);
calculator.division(1, 2);
calculator.powoerof(1, 2);

const age = 96;
function calculateKrAge(ageOfForigner) {
    return ageOfForigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const plusResult = calculator.add(2 ,3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.minus(plusResult, minusResult);
const divisionResult = calculator.minus(plusResult, multiplyResult);
const powoerofResult = calculator.minus(plusResult, divisionResult);
console.log(plusResult, minusResult, multiplyResult, divisionResult, powoerofResult);

const ageNow = parseInt(prompt('how old are you'));

if (isNaN(ageNow)){
    console.log('please number');
} else if (ageNow < 18) {
    console.log('you are to young');
} else if (ageNow >= 18 && ageNow <= 50) {
    console.log('you can drink');
} else {
    console.log('thank you');
}