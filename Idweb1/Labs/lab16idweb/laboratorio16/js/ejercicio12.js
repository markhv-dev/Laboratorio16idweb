// Laboratorio 16 - Ejercicio 12
// Autor: Mark hancco

let cuadrado = document.getElementById("cuadrado");
let btnMover = document.getElementById("btnMover");
let btnReiniciar = document.getElementById("btnReiniciar");

btnMover.addEventListener("click", function() {
    cuadrado.classList.add("mover");
});

btnReiniciar.addEventListener("click", function() {
    cuadrado.classList.remove("mover");
});
