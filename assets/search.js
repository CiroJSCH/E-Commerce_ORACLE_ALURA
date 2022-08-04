const searchBar = document.querySelector('.search-bar');

const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());

window.addEventListener('click', function(e) {
    if (searchBar.contains(e.target)) {
      buscar()
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

const listaResultados = document.querySelector ('.header__search-results');

const crearItem = (producto) => {
    const li = document.createElement('li');
    li.classList.add('results-item');
    li.innerHTML = `
        <div class="item-container">
            <img src="/E-Commerce_ORACLE_ALURA/Imagenes/${producto.imagen}" alt="" width="35">
            <p class="results-item-name">${producto.nombre}</p>
        </div>
        <p class="results-item-price">${producto.precio}</p>
    `;
    listaResultados.appendChild(li);
}
