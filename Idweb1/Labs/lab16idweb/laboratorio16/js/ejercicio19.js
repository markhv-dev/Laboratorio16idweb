// Laboratorio 16 - Ejercicio 19
// Autor: Mark hancco

// JSON original
let jsonOriginal = '{"nombre": "Carlos", "edad": 20, "ciudad": "Arequipa"}';

let btn = document.getElementById("btnModificar");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", function() {
    // convertir a objeto
    let persona = JSON.parse(jsonOriginal);

    console.log("Original:", persona);
    resultado.innerHTML = "<p><strong>Original:</strong> " + JSON.stringify(persona) + "</p>";

    // modificar valor
    persona.edad = 25;

    // volver a JSON
    let jsonActualizado = JSON.stringify(persona);

    console.log("Actualizado:", jsonActualizado);
    resultado.innerHTML += "<p><strong>Actualizado:</strong> " + jsonActualizado + "</p>";
});
