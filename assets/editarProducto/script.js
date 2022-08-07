import { categoryInput, descriptionInput, imageInput, initialData, nameInput, priceInput } from "./initialData.js";
import { updateProduct } from "./updateProduct.js";

const saveButton = document.querySelector('.content__form__submit');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const producto = id => fetch(`https://62ef11618d7bc7c2eb74befd.mockapi.io/productos/${id}`).then((response) => response.json());

producto(id).then(data=>{
    initialData(data);
})

saveButton.addEventListener('click', e=>{
  e.preventDefault();
  const image = imageInput.value;
  const category = categoryInput.value;
  const nameI = nameInput.value;
  const price = priceInput.value;
  const descripcion = descriptionInput.value;
  updateProduct(image, category, nameI, price, descripcion, id);
})