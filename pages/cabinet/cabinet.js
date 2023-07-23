let btnToMainPage = document.querySelector('.btn__return-to-main');
let fakeBtn = document.querySelector('.btn__fake-return-to-main');
let smallRound = document.querySelector('.round-small');
let middleRound = document.querySelector('.round-middle');
let textBlock = document.querySelector('.mmm');

btnToMainPage.addEventListener('click', () => {
    window.location.href = '../../index.html'
})

fakeBtn.addEventListener('click', () => {
    smallRound.classList.remove('unvisible');
    smallRound.classList.add('visible');
    setTimeout(() => {
        middleRound.classList.remove('unvisible');
        middleRound.classList.add('visible');
    }, 700);
    setTimeout(() => {
        textBlock.classList.remove('unvisible');
        textBlock.classList.add('visible');
    }, 1400)
    fakeBtn.classList.remove('visible');
    fakeBtn.classList.add('unvisible');
})

textBlock.addEventListener('click', () => {
    middleRound.classList.remove('visible');
    middleRound.classList.add('unvisible');
    textBlock.classList.remove('visible');
    textBlock.classList.add('unvisible');
    setTimeout(() => {
        textBlock.textContent = 'Может попробовать еще раз?'
    }, 600)
    setTimeout(() => {
        smallRound.classList.remove('visible');
        smallRound.classList.add('unvisible');
    }, 200)
    setTimeout(() => {
        smallRound.classList.remove('unvisible');
        smallRound.classList.add('visible');
    }, 800)
    setTimeout(() => {
        middleRound.classList.remove('unvisible');
        middleRound.classList.add('visible');
    }, 1600)
    setTimeout(() => {
        textBlock.classList.remove('unvisible')
        textBlock.classList.add('visible');
    }, 2400)
    setTimeout(() => {
        btnToMainPage.classList.remove('unvisible')
        btnToMainPage.classList.add('visible')
    }, 3000)
})