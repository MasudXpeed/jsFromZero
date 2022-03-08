'use strict';
const menuHandelar = document.querySelector('.menu_handaler');
const sidePanel = document.querySelector('.side-panel');

menuHandelar.addEventListener('click', function (e) {
    sidePanel.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    let el = e.target.closest('.side-panel');
    let el2 = e.target.closest('.menu_handaler');
    if (el2 == null && el == null) {
        sidePanel.classList.remove('active');
    }
})
