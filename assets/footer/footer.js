const footerName = document.querySelector('.footer__form__name');
const footerText = document.querySelector('.footer__form__message');
const footerButton = document.querySelector('.footer__form__submit');
const errores = document.getElementById('errores');
const inputs = [footerName, footerText];

footerButton.addEventListener('click', e=>{
    e.preventDefault();
    inputs.forEach(input=>{
        if(input.validity["valueMissing"]){
            errores.classList.remove('noErrorFoot');
            errores.innerHTML = 'El campo no puede estar vacío';
            errores.classList.add('errorFoot');
            input.classList.add('errorFootInput');
        } else {
            errores.innerHTML = 'Mensaje enviado';
            errores.classList.add('noErrorFoot');
            input.classList.remove('errorFootInput');
            input.value = '';
        }
    })
})
