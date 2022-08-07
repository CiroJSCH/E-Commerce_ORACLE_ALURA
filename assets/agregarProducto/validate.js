export function valida(input) {
    const tipoDeInput = input.dataset.type;
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
        input.parentElement.querySelector('.input-message-error').style.display = "none";
    } else {
        input.parentElement.querySelector('.input-message-error').removeAttribute('hidden');
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
]

const mensajesDeError = {
    url: {
        typeMismatch: "Debe iniciar con example: o example://",
        valueMissing: "Este campo no puede estar vacío"
    },
    categoria: {
        patternMismatch: "Debe incluir de 4 a 25 caracteres",
        valueMissing: "Este campo no puede estar vacío"
    },
    nombre: {
        patternMismatch: "Debe incluir de 4 a 25 caracteres",
        valueMissing: "Este campo no puede estar vacío"
    },
    precio: {
        patternMismatch: "Debe iniciar con $. Solo números y punto",
        valueMissing: "Este campo no puede estar vacío"
    },
    descripcion: {
        patternMismatch: "Debe incluir de 40 a 400 caracteres",
        valueMissing: "Este campo no puede estar vacío"
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tiposDeErrores.forEach(error=>{
        if(input.validity[error]) {
            mensaje=mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}
