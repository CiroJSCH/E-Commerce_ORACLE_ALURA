import { crearProducto } from "./crearItem.js";
import { eliminarProducto } from "./eliminarProducto.js";
import { effectDelete } from "./eliminarProducto.js";

const sectionProductos = document.querySelector('.products');
const listaProductos = () => fetch('https://62ef11618d7bc7c2eb74befd.mockapi.io/productos').then(respuesta => respuesta.json());

listaProductos().then(productos=> {
    productos.forEach(producto => {
        const product = document.createElement('div');
        product.classList.add('products__element');
        product.innerHTML = crearProducto(producto);
        sectionProductos.appendChild(product);

        const editIcon = document.getElementById(`edit_${producto.id}`);
        editIcon.addEventListener('click', (event)=>{
            const reg = /edit_/;
            const editId = event.currentTarget.id.split(reg)[1]
            window.location.href = `../screens/editarproducto.html?id=${editId}`
        })

        const trashIcon = document.getElementById(`${producto.id}`)
        trashIcon.addEventListener('click', (event)=>{
            effectDelete(event)
            eliminarProducto(producto.id);
        });
    });
});






