const UseStrict = function(){ // 엄격 모드로 스크립트 작성 하기
    'use strict';
};
const usestrict = new UseStrict;

console.dir(document.body);

console.log(document.title = 'hi');

const title = document.querySelector('div .title');
const title2 = document.querySelectorAll('div .title');

console.log(title2);

function handleTitleClick() {
    // console.log('click');

    // title.style.color = 'red';
    // title.classList.add('red');

    const curColor = title.style.color;
    let newColor;
    if (curColor === 'red') {
        newColor = 'tomato';
    } else {
        newColor = 'red';
    }
    title.style.color = newColor;
}

function handleTitleClick02() {
    const curColorClass = 'tomato';
    if (title.className === 'red') {
       title.className = '';
    } else {
        title.className = 'tomato';
    }
}

function handleTitleClick03() {
    const curColorRed = 'red';
    const curColorTomato = 'tomato';
    const classChk = title.classList;
    if (classChk.contains(curColorRed)) {
        classChk.remove(curColorRed);
        classChk.add(curColorTomato);
    } else {
        classChk.remove(curColorTomato);
        classChk.add(curColorRed);z
    }
}
function handleTitleClick04() {
    const curColorRed = 'red';
    const curColorTomato = 'tomato';
    const classChk = title.classList;
    classChk.toggle(curColorTomato);
}

function handleMouseEneter() {
    console.log('mouseenter');

    title.style.color = 'red';
    title.classList.add('red');
}
function handleMouseLeave() {
    console.log('mouseleave');

    title.style.color = '';
    title.classList.remove('red');
}
function handelWinResize() {
    document.body.style.backgroundColor = 'tomato';
}
function handleWinCopy() {
    console.log('copy');
}
function handleWinOffline() {
    console.log('offline');
}
function handleWinOnline() {
    console.log('online');
}

// title.addEventListener('click', handleTitleClick);
// title.addEventListener('mouseenter',handleMouseEneter);
// title.addEventListener('mouseleave',handleMouseLeave);

// window.addEventListener('resize', handelWinResize);
// window.addEventListener('copy', handleWinCopy);
// window.addEventListener('offline', handleWinOffline);
// window.addEventListener('online', handleWinOnline);

title.addEventListener('click', handleTitleClick04);