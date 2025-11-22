// Laboratorio 16 - Ejercicio 3
// Autor: Mark Hancco

const boton = document.getElementById("btnCambiar");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
    texto.textContent = "Texto cambiado";
});
