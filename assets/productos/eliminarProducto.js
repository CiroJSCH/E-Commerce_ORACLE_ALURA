export const eliminarProducto = (id) => {
    return fetch(`https://62ef11618d7bc7c2eb74befd.mockapi.io/productos/${id}`, {
      method: "DELETE"
    })
  }

export const effectDelete = (event)=>{
    const product = event.composedPath()[2];
    product.classList.add ('desvanecer');
            setTimeout (function () {
                product.remove();
            }, 500) ;
}