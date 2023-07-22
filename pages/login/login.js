let loginBox = document.querySelector('.login__box');
let registrationBox = document.querySelector('.registration__box');
let btnEnter = document.querySelector('.btn__enter');
let loginBtnReg = document.querySelector('.login__btn__reg');
let registrationBtnReg = document.querySelector('.registration__btn__reg');
let users = {}

function User(login, pass){
    this.login = login
    this.password = pass
}
btnEnter.addEventListener('click', () => {
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if (localStorage.data){
        let data = JSON.parse(localStorage.data)
        for (let key in data){
            if (data[key].login === login.value && data[key].password === password.value){
                alert('Success')
            } else {
                alert('Not found')
            }
        }
    } else {
        alert('Not found')
    }

})
loginBtnReg.addEventListener('click', () => {
    loginBox.classList.add('hidden');
    registrationBox.classList.remove('hidden');
})

registrationBtnReg.addEventListener('click', () => {
    let login = document.querySelector('#reg__login');
    let password = document.querySelector('#reg__password');
    let passwordRepeat = document.querySelector('#reg__password-repeat');
    if (login.value == ''){
        alert('Заполните поле логин')
    } else if (password.value == ''){
        alert('Заполните поле пароль')
    } else if (passwordRepeat.value == ''){
        alert('Заполните поле повтор пароль')
    } else if (password.value !== passwordRepeat.value){
        alert('Пароли не совпадают')
    } else {
        if (!localStorage.data){
            let user = new User(login.value, password.value)
            let ID = login.value
            users[ID] = user
            localStorage.setItem('data', JSON.stringify(users))
        } else {
            let data = JSON.parse(localStorage.data)
            for (let key in data){
                if (key === login.value){
                    alert('Логин занят')
                } else {
                    let user = new User(login.value, password.value)
                    let ID = login.value
                    users[ID] = user
                    localStorage.setItem('data', JSON.stringify(users))
                }
            }

        }
    }
})


