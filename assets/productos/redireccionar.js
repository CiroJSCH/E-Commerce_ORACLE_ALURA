export {redirect}

function redirect(){
    const button = document.querySelector ('.main__intro-button');
    button.addEventListener ('click', ()=>window.location.href='../../agregar-producto.html');
}