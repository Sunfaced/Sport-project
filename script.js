let cloudButton = document.querySelectorAll('.cloud__button');
let cloudButtonClose = document.querySelectorAll('.cloud__button-close');
let cloudButtonBuy = document.querySelectorAll('.cloud__button-buy');
let modal = document.querySelector('.modal');
let modalButtonClose = document.querySelector('.modal__button-close');
let btnUp = document.querySelector('#btn-up');

// Обработчик событий для кнопок "Узнать цену в Услугах"
cloudButton.forEach(el => {
    el.addEventListener('click', (e) => {
        let parent = e.target.parentElement
        parent.classList.add('cloud__rotate');
        parent.children[0].classList.add('hidden')
        parent.children[2].classList.add('hidden')
        setTimeout(()=>{
            parent.children[1].classList.remove('hidden')
            parent.children[3].classList.remove('hidden')
            parent.children[4].classList.remove('hidden')
        }, 900)
    })
})

// Обработчик событий для кнопок "Закрыть в Услугах"
cloudButtonClose.forEach(el => {
    el.addEventListener('click', (e) => {
        let parent = e.target.parentElement
        parent.classList.remove('cloud__rotate')
        parent.children[1].classList.add('hidden')
        parent.children[3].classList.add('hidden')
        parent.children[4].classList.add('hidden')
        setTimeout(()=>{
            parent.children[0].classList.remove('hidden')
            parent.children[2].classList.remove('hidden')
        }, 100)
    })
})

// Обработчик событий для кнопок "Купить в Услугах"
cloudButtonBuy.forEach(el => {
    el.addEventListener('click', (e) => {
        modal.classList.remove('unvisible')
        modal.classList.add('visible')
    })
})

// Обработчик событий для кнопок "Закрыть в Модальном окне"
modalButtonClose.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('unvisible');
})

// Обработчик событий для кнопки "Вверх"
window.addEventListener('scroll', () => {
    if (window.scrollY > 400){
        btnUp.classList.remove('unvisible')
        btnUp.classList.add('visible')
    } else {
        btnUp.classList.remove('visible')
        btnUp.classList.add('unvisible')
    }
})

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})




