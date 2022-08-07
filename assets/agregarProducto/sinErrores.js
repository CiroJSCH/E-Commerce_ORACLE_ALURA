export const sinErrores = () => {
    const errores = document.querySelectorAll('.input-message-error');
    let cantErr = 0;
    errores.forEach(error=>{
        if (error.innerHTML != '') {
            cantErr ++;
        }
    })
    return cantErr;
}