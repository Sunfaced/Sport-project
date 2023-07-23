let loginBox = document.querySelector('.login__box');
let registrationBox = document.querySelector('.registration__box');
let btnEnter = document.querySelector('.btn__enter');
let btnToMainPage = document.querySelector('.btn__return-to-main');
let btnBack = document.querySelector('.btn__return');
let loginBtnReg = document.querySelector('.login__btn__reg');
let registrationBtnReg = document.querySelector('.registration__btn__reg');
let users = localStorage.data ? JSON.parse(localStorage.data) : {}

function User(login, pass){
    this.login = login
    this.password = pass
}

btnToMainPage.addEventListener('click', () => {
    window.location.href = '../../index.html'
})

btnEnter.addEventListener('click', () => {
    console.log(users)
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if (localStorage.data){
        let data = JSON.parse(localStorage.data)
        if (!(login.value in data)){
            alert('Аккаунт не зарегистрирован')
        } else {
            for (let key in data) {
                if (data[key].login === login.value) {
                    if (data[key].password === password.value) {
                        alert('Вы успешно вошли в аккаунт');
                        break;
                    } else {
                        alert('Неправильный пароль');
                        break;
                    }
                }
            }
        }
    } else {
        alert('Аккаунт не зарегистрирован')
    }

})
loginBtnReg.addEventListener('click', () => {
    loginBox.classList.add('hidden');
    btnToMainPage.classList.add('hidden');
    registrationBox.classList.remove('hidden');
    btnBack.classList.remove('hidden')
})

btnBack.addEventListener('click', () => {
    loginBox.classList.remove('hidden');
    btnToMainPage.classList.remove('hidden');
    registrationBox.classList.add('hidden');
    btnBack.classList.add('hidden');
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
        alert('Заполните поле повтор пароля')
    } else if (password.value !== passwordRepeat.value){
        alert('Пароли не совпадают')
    } else {
        let user = new User(login.value, password.value)
        let ID = login.value
        if (!localStorage.data){
            users[ID] = user
            localStorage.setItem('data', JSON.stringify(users))
            login.value = ''
            password.value = ''
            passwordRepeat.value = ''
            alert('Вы успешно зарегистрировались');
        } else {
            let data = JSON.parse(localStorage.data)
            for (let key in data){
                if (key === login.value){
                    alert('Логин занят')
                    break;
                } else {
                    users[ID] = user
                    console.log(users, data)
                    localStorage.setItem('data', JSON.stringify(users))
                    login.value = ''
                    password.value = ''
                    passwordRepeat.value = ''
                    alert('Вы успешно зарегистрировались');
                    break;
                }
            }

        }
    }
})


