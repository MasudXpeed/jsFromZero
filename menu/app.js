'use strict';
const menuHandelar = document.querySelector('.menu_handaler');
const sidePanel = document.querySelector('.side-panel');

menuHandelar.addEventListener('click', function () {
    sidePanel.classList.toggle('active');
})
document.addEventListener('mouseup', function (e) {
    if (e.target !== sidePanel || e.target !== menuHandelar) {
        sidePanel.classList.remove('active');
    }
})
