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


let buttonSum = document.querySelector('.calculate__block-result')
let elem1 = document.querySelector('.calculate__block-height').value
let elem2 = document.querySelector('.calculate__block-height').value
let sum = document.querySelector('.IMT')
buttonSum.addEventListener('click', () => {
    console.log(elem1)
})