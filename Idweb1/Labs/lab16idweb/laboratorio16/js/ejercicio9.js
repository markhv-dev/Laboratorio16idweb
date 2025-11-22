// Laboratorio 16 - Ejercicio 9
// Autor: Mark hancco

let miniaturas = document.querySelectorAll(".miniaturas img");
let contenedor = document.getElementById("imagenGrande");

for (let i = 0; i < miniaturas.length; i++) {
    miniaturas[i].addEventListener("click", function() {
        let urlGrande = this.getAttribute("data-grande");
        contenedor.innerHTML = '<img src="' + urlGrande + '">';
    });
}
