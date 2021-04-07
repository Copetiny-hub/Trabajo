var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
    telefono: /^\d{9,9}$/
};
formulario.addEventListener("submit", function (event) {
    var flag;
    flag = validar();
    if (flag == true) {
        enviar();
    }
    event.preventDefault();
});
function enviar() {
    formulario.style.display = "none";
    document.getElementById("mensaje").innerHTML = "<a href='#'>¡Muchas gracias, su formulario a sido enviado!</a>";
    document.body.style.backgroundColor = "#D5DBDB";
}
function validar() {
    var x;
    x = false;
    if (document.getElementById('condiciones') && document.getElementById('name') && document.getElementById('año') && document.getElementById('comentario')) {
        x = true;
    }
    else {
        alert("Complete todos los campos disponibles");
    }
    return x;
}
var validarnumero = function (event) {
    switch (event.target.numero) {
        case "telefono":
            if (expresiones.telefono.test(event.target.value)) {
                return true;
            }
            else {
                alert("Caracteres invalidos");
            }
    }
};
