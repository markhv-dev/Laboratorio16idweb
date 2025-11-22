// Laboratorio 16 - Ejercicio 8
// Autor: Mark hancco

let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // evitar que se recargue

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");

    // limpiar errores anteriores
    errorNombre.innerHTML = "";
    errorCorreo.innerHTML = "";

    let hayError = false;

    // validar nombre
    if (nombre.value == "") {
        let span = document.createElement("span");
        span.textContent = "El nombre es obligatorio";
        span.style.color = "red";
        errorNombre.appendChild(span);
        hayError = true;
    }

    // validar correo
    if (correo.value == "") {
        let span = document.createElement("span");
        span.textContent = "El correo es obligatorio";
        span.style.color = "red";
        errorCorreo.appendChild(span);
        hayError = true;
    }

    if (!hayError) {
        alert("Formulario enviado correctamente!");
    }
});
