function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let checkbox = document.getElementById("terminos");
let boton = document.getElementById("regBtn");

//Ningún campo puede estar vacío
function camposCompletos() {
    if (nombre.value === "" || apellido.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        showAlertError()
        console.log("Los campos están incompletos");
    } else {
        console.log("Los campos están completos");
        return true;
    }    
}


//Contraseña con mínimo 6 caracteres
function minContraseña() {
    if (password1.value.length>=6){
        console.log("Contraseña válida");
        return true;
    } else {
        console.log("Contraseña demasiado corta");
        return false;
    
    }  
}

//Contraseñas que coincidan
function contraseñasIguales() {
    if (password1.value===password2.value){
        console.log("Las contraseñas coinciden");
        return true;
    } else {
        console.log("Las contraseñas no coinciden");
        return false;
    
    } 
}

//Checkbox 
function verificacion() {
    if (checkbox.checked) {
        console.log("Checkbox verificado");
        return true;
    } else {
        console.log("Checkbox no verificado");
        return false;
    }  
}

//Validación del registro
function validarFormulario() {
    if (camposCompletos() && minContraseña() && contraseñasIguales() && verificacion()) {
        showAlertSuccess();
        return true;
    } else {
        showAlertError();
        return false;
    
    }
}

//Registro completo
boton.addEventListener("click", validarFormulario);


