const UseStrict = function() {
    'use strict';
}
useStrict = new UseStrict;

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});

const FOUCSED_CLASS = '_focused';

searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add(FOUCSED_CLASS);
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove(FOUCSED_CLASS);
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(() => {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        }); //요소, 지속시간, 옵션
    } else {
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        }); //요소, 지속시간, 옵션
    }
}, 300));

