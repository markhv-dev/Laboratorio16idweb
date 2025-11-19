// Laboratorio 16 - Ejercicio 4
// Autor: Mark Hancco

const boton = document.getElementById("btnToggle");
const texto = document.getElementById("texto");
let esOriginal = true;

boton.addEventListener("click", () => {
    if (esOriginal) {
        texto.textContent = "Texto cambiado";
    } else {
        texto.textContent = "Texto original";
    }
    esOriginal = !esOriginal;
});
