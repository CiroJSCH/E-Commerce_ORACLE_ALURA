import { productosMain } from "./productos-main.js";

const sectionProducts = document.querySelector('.products');

const categorias = ['Star Wars', 'Consolas', 'Diversos'];

let cuenta=0;

for (let i=0; i<categorias.length; i++){

    const categoria = document.createElement('section');
    categoria.classList.add('categoria');
    sectionProducts.appendChild(categoria);

    const categoriaHead = document.createElement('div');
    categoriaHead.innerHTML = `
        <h2 class="head__title">${categorias[i]}</h2>
        <div class="head__all">
            <p>Ver todo</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    `
    
    categoriaHead.classList.add('categoria__head');
    categoria.appendChild(categoriaHead)

    const categoriaProduct = document.createElement('section');
    categoriaProduct.classList.add('categoria__product');
    categoria.appendChild(categoriaProduct);

    for (let i=cuenta; i<cuenta+6; i++){

        const productElement = document.createElement('div');
        categoria.appendChild(productElement);
    
        productElement.innerHTML = `
        <span class="products__element_image" id="elemento${i}">
        </span>
        <div class="products__element_inf">
            <h3 class="element_inf_name">${productosMain[i].nombre}</h3>
            <p class="element_inf_price">${productosMain[i].precio}</p>
            <p class="element_inf_see">${productosMain[i].codigo}</p>
        </div>
        `
        productElement.classList.add('products__element');
        categoriaProduct.appendChild(productElement)
    
        const modificarImagen = document.getElementById(`elemento${i}`);
        modificarImagen.setAttribute("style", `background: url('../../Imagenes/${productosMain[i].imagen}') no-repeat center / cover`);
        
    }

    cuenta+=6
    
}



