const footerName = document.querySelector('.footer__form__name');
const footerText = document.querySelector('.footer__form__message');
const footerButton = document.querySelector('.footer__form__submit');
const errores = document.getElementById('errores');
const inputs = [footerName, footerText];

footerButton.addEventListener('click', e=>{
    e.preventDefault();
    console.log(inputs)
    inputs.forEach(input=>{
        if(input.validity["valueMissing"]){
            input.classList.add('errorInput');
            errores.classList.add('error');
            errores.innerHTML = 'No puede haber campos vacíos'
        } else {
            input.classList.remove('errorInput');
            errores.classList.remove('error');
            errores.innerHTML = '';
        }
    })
})

