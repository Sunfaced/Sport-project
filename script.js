let cloudButton = document.querySelectorAll('.cloud__button');
let cloudButtonClose = document.querySelectorAll('.cloud__button-close');
let cloudButtonBuy = document.querySelectorAll('.cloud__button-buy');
let modal = document.querySelector('.modal');
let modalButtonClose = document.querySelector('.modal__button-close');

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

cloudButtonBuy.forEach(el => {
    el.addEventListener('click', (e) => {
        modal.classList.remove('unvisible')
        modal.classList.add('visible')
    })
})

modalButtonClose.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('unvisible');
})




