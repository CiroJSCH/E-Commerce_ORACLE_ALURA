export {deleteProduct}

const deleteProduct = (event)=>{
    const product = event.composedPath()[2];
    product.classList.add ('desvanecer');
            setTimeout (function () {
                product.remove();
            }, 500) ;
}