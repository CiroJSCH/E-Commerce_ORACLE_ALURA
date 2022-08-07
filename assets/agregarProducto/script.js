import { agregarProducto } from "./agregar.js";
import { valida } from "./validate.js";
import { sinErrores } from "./sinErrores.js";

const imageInput = document.querySelector('label:nth-child(1) > input');
const categoryInput = document.querySelector('label:nth-child(2) > input');
const nameInput = document.querySelector('label:nth-child(3) > input');
const priceInput = document.querySelector('label:nth-child(4) > input');
const descriptionInput = document.querySelector('.content__form__text');
const addButton = document.querySelector('.content__form__submit');

const inputs = [imageInput, categoryInput, nameInput, priceInput, descriptionInput];

addButton.addEventListener('click', event=>{
    event.preventDefault();
    inputs.forEach (input => {
            valida(input);
        });
    if (sinErrores() == 0) {
        agregarProducto(nameInput.value, 
            categoryInput.value, 
            descriptionInput.value, 
            imageInput.value, 
            priceInput.value).then(response=>{
                window.location.href = "../screens/agregadoCorrecto.html";
            }).catch(err=>console.log(err));
    }  
});