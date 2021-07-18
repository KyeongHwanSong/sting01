const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const useStrict = new UseStrict;

// 연산자
 5 * 4; // 산술 연산자
 console.log( 5 * 4);// 20,

'My name is ' + 'Lee'; // 문자열 연결 연산자
console.log('My name is ' + 'Lee'); // My name is Lee 

color = 'red'; // 할당 연산자
console.log(color); // red

3 > 5; // 비교 연산자
console.log(3 > 5); // false;

true && false; // 논리연산자
console.log(true && false); // false;

typeof 'Hi'; // string
console.log(typeof 'Hi'); // string;

//산술 연산자
// 이항산술 연산자
5 + 2; //7
5 - 2; //3
5 * 3; //15
5 / 2; //2.5
5 % 2; // 1

//단항 산술 연산자
let x = 1;
x++;
console.log(x); //2, 1 + 1
x--;
console.log(x); //1, 위에 선언된 2에서 1를 빼기

let y = 5, result;
result = y++;
console.log(result, y); // 5 6

result = ++y;
console.log(result, y); // 7 7

result = y--;
console.log(result, y); // 7 6

result = --y;
console.log(result, y); // 5 5

+10; // 10
+(-10) // 10

// 단항연산자 사용시 숫자타입으로 변경됨
let z = '1';
console.log(+z); // 문자열을 숫자열로 변환
console.log(z); // 변환 없음

z = true; 
console.log(+z); //1
console.log(z); // true

z = false;
console.log(+z);
console.log(z); // false

z = 'Hello';
console.log(+z); //Nan
console.log(z); // Hello

-(-10); // 10
-'10'; // -10
-true; // -1
-'Hello'; // NaN

// 하나의 연산자가 있을 경우 연산자로 동작
'1' + 2; //12
1 + '2'; //12
1 + true; // 2
1 + false; //1
1 + null; 1
1 + undefined; //NaN

let a;
a = 10;
console.log(a); //10
a += 5; // a = a + 5;
console.log(a); //15
a -= 5; // a = a - 5;
console.log(a); //10
a *= 5; // a = a * 5;
console.log(a); // 50
a /= 5; 
console.log(a); // 10
a %= 5;
console.log(a); // 0

let str = 'My name is ';
str += 'Lee';
console.log(str); 

let q, w, e;
q = w = e = 0;
console.log(q, w, e);

// 비교연산자
 5 == 5; //true
 console.log(5 == 5);
 5 == '5'; //true
 console.log(5 == '5');

'0' == ''; //false
0 == ''; //true
0 == '0'; //true
false == 'false'; //false
false == '0'; //true
false == null; // false
false == undefined; //false

// ===는 같은 속성의 값
5 === 5; // true
5 === '5'; //false
NaN === NaN; //false
// NaN 체크시
isNaN(NaN);

Object.is(-0, +0);
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));

// 부동등 비교
5 != 8; //true
5 != 5; //false
5 != '5'; //false
// 불일치 비교
5 !== 8; //true
5 !== 5; //fasle
5 !== '5'; //true

//삼항 조건 연산자
let t = 2;
let good = t % 2 ? '홀수' : '짝수'; //0
console.log(good);
let t2 = 2, good2;
if (t2 % 2) good2 = '홍수';
else       good2 = '짱수';
console.log(good2);
let t3 = 10;
// let good3 = if (t3 * 3) {good3 = '홀수';} else {good3 = '짝수'}; 에러 형태

let good4 = t3 * 2 ? '0' : 0;
console.log(good4);

// 논리 연산자
true || true; // true
true || false; // true
false || true; //true
false || false; //false;

true && true; //true
true && false; //false
false && false; //false
false && false; // false

!true; //false
!false; // true

!0; //true;
!'Hello'; // false

console.log('Cat' && 'Dog');
// 복잡한 연산의 경우

console.log(!(x || y ) === (!x && !y));
console.log(x && y === (!x || !y));

//쉼표 연산자
let u, i, o;
u = 1, i = 1, o = 2;
console.log(u, i, o);

//그룹 연산자
console.log(10 * 2 + 3);
console.log(10 * (2 + 3));

//typeof 연산자
// 해당 type에 대한 확인

// 지수연산자
2 ** 2; //4
2 ** 2.5; //5.6568~~
2 ** 0; //1
2 ** -2; // 0.25

2 ** 2 ** 2; //16
Math.pow(Math.pow(2, 2), 2); //16
(-5) ** 2; // 음수 사용시 가로 사용

let num = 0;
num **= 2;
2 * 5 ** 2; // **먼저 계산


