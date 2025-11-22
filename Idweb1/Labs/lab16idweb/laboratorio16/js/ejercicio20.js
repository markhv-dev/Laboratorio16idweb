// Laboratorio 16 - Ejercicio 20
// Autor: Mark hancco

let inputNombre = document.getElementById("nombre");
let btn = document.getElementById("btnConvertir");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", function() {
    let nombre = inputNombre.value;

    if (nombre != "") {
        // crear objeto con los datos
        let datos = {
            nombre: nombre,
            fecha: new Date().toLocaleDateString()
        };

        // convertir a JSON
        let jsonDatos = JSON.stringify(datos);

        console.log("JSON:", jsonDatos);
        resultado.innerHTML = "<p>JSON generado: " + jsonDatos + "</p>";
    } else {
        alert("Escribe tu nombre");
    }
});
