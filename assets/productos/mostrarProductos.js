import { crearProducto } from "./crearItem.js";
import { eliminarProducto } from "./eliminarProducto.js";
import { effectDelete } from "./eliminarProducto.js";

const sectionProductos = document.querySelector('.products');
const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());

listaProductos().then(productos=> {
    productos.forEach(producto => {
        const product = document.createElement('div');
        product.classList.add('products__element');
        product.innerHTML = crearProducto(producto);
        sectionProductos.appendChild(product);
        const trashIcon = document.getElementById(`${producto.id}`)
        trashIcon.addEventListener('click', (event)=>{
            effectDelete(event)
            eliminarProducto(producto.id);
        });
    });
})




