const productImage = document.querySelector('.productoImg');
const productTitle = document.querySelector('.information__title');
const productPrice = document.querySelector('.information__price');
const productDescription = document.querySelector('.information__description');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const producto = (id) => fetch(`https://62ef11618d7bc7c2eb74befd.mockapi.io/productos/${id}`).then((response) => response.json());

producto(id).then(info=>{
    modifyData(info.imagen, info.nombre, info.precio, info.descripcion);
})

const modifyData = (image, title, price, description) => {
    productImage.setAttribute("style", `background: url('${image}') no-repeat center / cover`);
    productTitle.innerHTML = title;
    productPrice.innerHTML = price;
    productDescription.innerHTML = description;
}