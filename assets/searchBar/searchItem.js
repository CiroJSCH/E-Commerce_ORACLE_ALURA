export {listaResultados, crearItem}

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
    li.addEventListener('click', ()=>{
        window.location.href = `../screens/producto.html?id=${producto.id}`
    })
    listaResultados.appendChild(li);
}
