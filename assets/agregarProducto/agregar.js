export const agregarProducto = (nombre, categoria, descripcion, imagen, precio) => {
    return fetch("https://62ef11618d7bc7c2eb74befd.mockapi.io/productos", {
      method:"POST",
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify({nombre, categoria, descripcion, imagen, precio, id:uuid.v4()})
    });
  }