import { crearItem, listaResultados } from "./searchItem.js";

const searchBar = document.querySelector('.search-bar');

const listaProductos = () => fetch('https://62ef11618d7bc7c2eb74befd.mockapi.io/productos').then(respuesta => respuesta.json());

window.addEventListener('click', function(e) {
    if (searchBar.contains(e.target)) {
      buscar();
    } else {
      listaResultados.innerHTML = '';
    }
  })

const buscar = () => {
    searchBar.addEventListener('keyup', (e) => {
        let busqueda = new RegExp(`${searchBar.value.toLowerCase()}`);
        listaProductos().then(productos => {
            listaResultados.innerHTML = '';
            productos.forEach(producto => {
                if (busqueda.test(producto.nombre.toLowerCase()) && searchBar.value.toLowerCase() != '') {
                    crearItem(producto)
                }
            });
        });
    });
}
