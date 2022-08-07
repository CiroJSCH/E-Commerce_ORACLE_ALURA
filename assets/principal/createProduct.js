export const createProduct = (product) => {
    const productElement = document.createElement('div');

    productElement.innerHTML = `
        <span class="products__element_image" style="background: url('${product.imagen}') no-repeat center / cover">
        </span>
        <div class="products__element_inf">
            <h3 class="element_inf_name">${product.nombre}</h3>
            <p class="element_inf_price">${product.precio}</p>
            <p class="element_inf_see">Product #111111</p>
        </div>
    `
    productElement.classList.add('products__element');
    productElement.setAttribute('id', `${product.id}`);

    productElement.addEventListener('click', (event)=>{
        window.location.href = `../screens/producto.html?id=${event.currentTarget.id}`
    });

    return productElement;
}

