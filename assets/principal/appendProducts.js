import { createProduct } from "./createProduct.js";

export const appendProducts = (categories, products) => {
    categories.forEach(categoria=>{
        const categoryId = categoria.getAttribute('id');
        const categoryContainer = categoria.querySelector('section');
        products.forEach(product=>{
            if ((product.categoria.toLowerCase().replace(/ /g, "") ==  categoryId) &&
                (categoryContainer.childElementCount < 6)) {
                    categoryContainer.appendChild(createProduct(product));      
            }
        })
    })
}