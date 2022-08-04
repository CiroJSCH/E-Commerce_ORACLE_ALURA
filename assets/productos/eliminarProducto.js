export const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
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