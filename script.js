let cloudButton = document.querySelectorAll('.cloud__button');
let cloudButtonClose = document.querySelectorAll('.cloud__button-close');

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