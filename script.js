let cloudButton = document.querySelectorAll('.cloud__button');
let cloudButtonClose = document.querySelectorAll('.cloud__button-close');
let cloudButtonBuy = document.querySelectorAll('.cloud__button-buy');
let modal = document.querySelector('.modal');
let modalButtonClose = document.querySelector('.modal__button-close');
let btnUp = document.querySelector('#btn-up');
let header = document.querySelector('header');
let loginBtn = document.querySelector('.login__btn');

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
    if (window.scrollY > 700){
        btnUp.classList.remove('unvisible')
        header.classList.add('unvisible')
        btnUp.classList.add('visible')
    } else {
        btnUp.classList.remove('visible')
        header.classList.remove('unvisible')
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

// Обработчик событий для кнопки "Войти"
loginBtn.addEventListener('click', () => {
    window.location.href = './pages/login/login.html'
})

let btnResult = document.querySelector('.calculate__block-result')
let btnBack = document.querySelector('.calculate__block-back')
let elem1 = document.querySelector('.calculate__block-height')
let elem2 = document.querySelector('.calculate__block-weight')
let imt = document.querySelector('.IMT')

btnResult.onclick = function(){
    if(elem1.value != '' && elem2.value != ''){
        let sum = Math.round((+elem2.value / (+elem1.value * +elem1.value) * 10000)*10)/10
        if(sum <= 16){
            imt.textContent = 'Ваш индекс ' + sum + ' Значительный дефицит массы тела'
        }else if(sum > 16 && sum <= 18.5 ){
            imt.textContent = 'Ваш индекс ' + sum + ' Дефицит массы тела'
        }else if(sum > 18.5 && sum <= 25){
            imt.textContent = 'Ваш индекс ' + sum + ' Норма'
        }else if(sum > 25 && sum <= 30){
            imt.textContent = 'Ваш индекс ' + sum + ' Лишний вес'
        }else if(sum > 30 && sum <= 35){
            imt.textContent = 'Ваш индекс ' + sum + ' Ожирение первой степени'
        }else if(sum > 35 && sum <= 40){
            imt.textContent = 'Ваш индекс ' + sum + ' Ожирение второй степени'
        }else{
            imt.textContent = 'Ваш индекс ' + sum + ' Ожирение третьей степени'
        }
        btnResult.classList.add('hidden')
        btnBack.classList.remove('hidden')
        elem1.classList.add('delete__border')
        elem2.classList.add('delete__border')
        elem1.disabled = true
        elem2.disabled = true
    }
} 

btnBack.onclick = function(){
    elem1.value = ''
    elem2.value = ''
    elem1.classList.remove('delete__border')
    elem2.classList.remove('delete__border')
    elem1.disabled = false
    elem2.disabled = false
    btnResult.classList.remove('hidden')
    btnBack.classList.add('hidden')
    imt.textContent = `Индекс массы тела (ИМТ) помогает узнать, внорме 
        ли ваш вес. Узнать свой ИМТ и как он влияет
        на здоровье сердца.`
}

// Слайдер
let slides = document.querySelectorAll('.slide')
let btnPrev = document.querySelector('.slide__prev')
let btnNext = document.querySelector('.slide__next')
console.log(btnPrev)

btnNext.onclick = function(){
    let slidesLength = slides.length - 1
    let activeIndex = 0 
    slides.forEach((elem, index) => {
        if(!elem.classList.contains('hidden')){
            activeIndex = index
        }
    })
    if (slidesLength === activeIndex){
        slides[0].classList.remove('hidden')
        slides[activeIndex].classList.add('hidden')
    } else {
        slides[activeIndex + 1].classList.remove('hidden')
        slides[activeIndex].classList.add('hidden')
    }    
}

btnPrev.onclick = function(){
    let slidesLength = slides.length - 1 
    let activeIndex = 0 
    slides.forEach((elem, index) => {
        if(!elem.classList.contains('hidden')){
            activeIndex = index
        }
    })
    if (activeIndex === 0){
        slides[slidesLength].classList.remove('hidden')
        slides[activeIndex].classList.add('hidden')
    } else {
        slides[activeIndex - 1].classList.remove('hidden')
        slides[activeIndex].classList.add('hidden')
    }    
}