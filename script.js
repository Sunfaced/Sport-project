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

let btn = document.querySelector('.calculate__block-result')
btn.onclick = function(){
    let elem1 = +document.querySelector('.calculate__block-height').value
    let elem2 = +document.querySelector('.calculate__block-weight').value
    let sum = elem2 / (elem1 * elem1) * 10000

    if(sum <= 16){
        document.querySelector('.IMT').textContent = sum + ' 1'
    }else if(sum > 16 && sum <= 18,5 ){
        document.querySelector('.IMT').textContent = sum + ' 2'
    }else if(sum > 18,5 && sum <= 25){
        document.querySelector('.IMT').textContent = sum + ' 3'
    }else if(sum > 25 && sum <= 30){
        document.querySelector('.IMT').textContent = sum + ' 4'
    }else if(sum > 30 && sum <= 35){
        document.querySelector('.IMT').textContent = sum + ' 5'
    }else if(sum > 35 && sum <= 40){
        document.querySelector('.IMT').textContent = sum + ' 6'
    }else{
        document.querySelector('.IMT').textContent = sum + ' 7'
    }
}



