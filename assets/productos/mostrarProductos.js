import { productos } from "./productos.js";
import { deleteProduct } from "./eliminarProducto.js";
import { redirect } from "./redireccionar.js";

const sectionProducts = document.querySelector('.products');

for (let i=0; i<productos.length; i++){

    const product = document.createElement('div');
    product.classList.add('products__element');

    product.innerHTML = `
    <span class="products__element_image" id="elemento${i}">
        <i class="fa-solid fa-trash" id="trash${i}"></i>
        <i class="fa-solid fa-pencil"></i>
    </span>
    <div class="products__element_inf">
        <h3 class="element_inf_name">${productos[i].nombre}</h3>
        <p class="element_inf_price">${productos[i].precio}</p>
        <p class="element_inf_code">${productos[i].codigo}</p>
    </div>
    `
    sectionProducts.appendChild(product)

    const deleteIcon = document.getElementById(`trash${i}`);
    deleteIcon.addEventListener('click', event=>deleteProduct(event));

    const modificarImagen = document.getElementById(`elemento${i}`);
    modificarImagen.setAttribute("style", `background: url('../../Imagenes/${productos[i].imagen}') no-repeat center / cover`);

}

redirect();

