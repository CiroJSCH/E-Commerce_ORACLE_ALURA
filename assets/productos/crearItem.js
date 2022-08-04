import { eliminarProducto } from "./eliminarProducto.js";

export const crearProducto = producto => {
    const productoHTML = `
        <span class="products__element_image" style="background:url('../Imagenes/${producto.imagen}') no-repeat center / cover">
            <i class="fa-solid fa-trash" id="${producto.id}"></i>
            <i class="fa-solid fa-pencil"></i>
        </span>
        <div class="products__element_inf">
            <h3 class="element_inf_name">${producto.nombre}</h3>
            <p class="element_inf_price">${producto.precio}</p>
            <p class="element_inf_code">Código: ${producto.id}</p>
        </div>
    `
    
    return productoHTML;
}