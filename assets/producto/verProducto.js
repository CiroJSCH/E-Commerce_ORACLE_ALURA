const productImage = document.querySelector('.productoImg');
const productTitle = document.querySelector('.information__title');
const productPrice = document.querySelector('.information__price');
const productDescription = document.querySelector('.information__description');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const producto = (id) => fetch(`http://localhost:3000/productos/${id}`).then((response) => response.json());

producto(id).then(info=>{
    modifyData(info.imagen, info.nombre, info.precio);
})

const modifyData = (image, title, price) => {
    productImage.setAttribute("style", `background: url('../Imagenes/${image}') no-repeat center / cover`);
    productTitle.innerHTML = title;
    productPrice.innerHTML = price;
}