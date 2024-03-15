function validarFormulario() {
    var exampleInputEmail1 = document.getElementById("exampleInputEmail1").value.trim();
    var exampleInputPassword1 = document.getElementById("exampleInputPassword1").value.trim();

    if (exampleInputEmail1 === "" || exampleInputPassword1 === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!validarEmail(exampleInputEmail1)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

function validarEmail(exampleInputEmail1) {
    // Expresión regular para validar el formato de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
