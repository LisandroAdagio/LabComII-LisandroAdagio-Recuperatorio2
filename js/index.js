function ingreso(){
    var formName = document.getElementById('input-name');
    var formEmail = document.getElementById('input-email');

    let validacion1 = validaName(formName.value);
    let validacion2 = validaEmail(formEmail.value);

    if (validacion1 && validacion2) {
        let succes1 = document.getElementById('form-container')
        let succes2 = document.getElementById('success-container')
        succes1.style.display = "None"
        succes2.style.display = "inline"
    } else {
        let ValidaError = document.getElementById('error-container')
        ValidaError.style.display = "inline"
    }
};

function validaName(nombre){
    if (nombre.length >= 3 && nombre.length <= 30 ) {
        return true;
    } else {
        return false;
    }
}

function validaEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
