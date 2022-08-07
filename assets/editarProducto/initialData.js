export {imageInput, categoryInput, nameInput, priceInput, descriptionInput}

const imageInput = document.querySelector('label:nth-child(1) > input');
const categoryInput = document.querySelector('label:nth-child(2) > input');
const nameInput = document.querySelector('label:nth-child(3) > input');
const priceInput = document.querySelector('label:nth-child(4) > input');
const descriptionInput = document.querySelector('.content__form__text');

export const initialData = producto => {
    imageInput.value = producto.imagen;
    categoryInput.value = producto.categoria;
    nameInput.value = producto.nombre;
    priceInput.value = producto.precio;
    descriptionInput.value = producto.descripcion;
}