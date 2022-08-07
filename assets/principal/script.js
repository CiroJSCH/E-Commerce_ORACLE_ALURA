import { createCategory, categories } from "./createCategory.js";
import { createProductContainer } from "./productContainer.js";
import { appendProducts } from "./appendProducts.js";

const sectionProducts = document.querySelector('.products');

const productsList = () => fetch('https://62ef11618d7bc7c2eb74befd.mockapi.io/productos').then(response => response.json());
productsList()
.then(products=>{
    products.forEach(product => {
            const getId = categories.indexOf(product.categoria);
            if (getId === -1) {
                const newCategory = createCategory(product.categoria);
                const productsContainer = createProductContainer();
                newCategory.appendChild(productsContainer);
                categories.push(product.categoria);
                sectionProducts.appendChild(newCategory);
            }
        });
        const categorias = document.querySelectorAll('.categoria');
        appendProducts(categorias, products);
})