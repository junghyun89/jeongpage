'use strict';

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const resultBox = document.querySelector('input[name=output]');
const resultSign = document.querySelector('.result');
const calcBtn = document.querySelectorAll('#calculator input[type=button]');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#title')
    .pause(1000)
    .delete(17, { delay: 1000 })
    .type('SOFTWARE ENGINEER')
    .pause(1000)
    .delete(18, { delay: 1000 })
    .type('FRONTEND DEVELOPER')
    .go();
})

function calcResult() {
    const afterCalvalue = eval(resultBox.value);
    console.log(afterCalvalue);
    resultBox.value = afterCalvalue;
}

function resultboxFocus() {
    resultBox.focus();
}

calcBtn.forEach(button => button.addEventListener("click", resultboxFocus));
resultSign.addEventListener("click", calcResult);