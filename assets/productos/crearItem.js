export const crearProducto = producto => {
    const productoHTML = `
        <span class="products__element_image" style="background:url('${producto.imagen}') no-repeat center / cover">
            <i class="fa-solid fa-trash" id="${producto.id}"></i>
            <i class="fa-solid fa-pencil" id="edit_${producto.id}"></i>
        </span>
        <div class="products__element_inf">
            <h3 class="element_inf_name">${producto.nombre}</h3>
            <p class="element_inf_price">${producto.precio}</p>
            <p class="element_inf_code">ID: ${producto.id}</p>
        </div>
    `
    return productoHTML;
}