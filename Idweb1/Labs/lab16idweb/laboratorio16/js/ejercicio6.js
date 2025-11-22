// Laboratorio 16 - Ejercicio 6
// Autor: Mark Hancco

const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

let valor = 0;

btnSumar.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
    mensaje.textContent = "";
});

btnRestar.addEventListener("click", () => {
    if (valor > 0) {
        valor--;
        contador.textContent = valor;
        mensaje.textContent = "";
    } else {
        mensaje.textContent = "El contador no puede ser menor a cero";
        mensaje.style.color = "red";
    }
});
