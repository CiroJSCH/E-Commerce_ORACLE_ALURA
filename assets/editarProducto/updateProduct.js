export const updateProduct = (nombre, categoria, descripcion, imagen, precio) => {
    return fetch(`https://62ef11618d7bc7c2eb74befd.mockapi.io/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({nombre, categoria, descripcion, imagen, precio})
    })
    .then(respuesta => respuesta)
    .catch(error=>console.log(error));
  }