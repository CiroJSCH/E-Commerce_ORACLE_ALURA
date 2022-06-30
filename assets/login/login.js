const user = {
    email : 'alura@gmail.com',
    password : 'alura123'
}

const email = document.querySelector('.form__email');
const password = document.querySelector('.form__password');
const submit = document.querySelector('.form__submit');
const error = document.querySelector('#errorMessage');
let attemps = 3;

submit.addEventListener('click', evento=>{
    evento.preventDefault();
    
    let introducedEmail = email.value;
    let introducedPass = password.value;

    let resultMail = validateMail(introducedEmail);
    let resultPass = validatePass(introducedPass);
    let notEmpty = checkEmpty(introducedEmail, introducedPass);

    if (notEmpty) {
        if (resultMail && resultPass) {
            error.innerHTML = '';
            error.classList.remove('error');
            window.location.href='../../productos.html';
        } else {
            error.classList.add('error');
            error.innerHTML = '';
            error.innerHTML = 'El correo o la contraseña son incorrectos';
            attemps--;
            if (attemps==0){
                error.innerHTML = 'Demasiados intentos. Cuenta bloqueada';
                error.classList.add('error');
                submit.classList.add('disable');
            }
        }
    
        email.value = '';
        password.value = '';

    } else {
        error.innerHTML = 'Los campos no pueden estar vacios';
        error.classList.add('error');
    }

})

function validateMail(email) {
    return email == user.email;
}

function validatePass(password) {
    return password == user.password;
}

function checkEmpty(email, password){
    return ( (email!='')&&(password!='') );
}
