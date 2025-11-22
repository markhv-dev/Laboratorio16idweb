// Laboratorio 16 - Ejercicio 7
// Autor: Mark hancco

let input = document.getElementById("textoInput");
let btnAgregar = document.getElementById("btnAgregar");
let btnBorrar = document.getElementById("btnBorrar");
let lista = document.getElementById("miLista");

// agregar elemento
btnAgregar.addEventListener("click", function() {
    let texto = input.value;

    if (texto != "") {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        input.value = ""; // limpiar input
    } else {
        alert("Escribe algo primero");
    }
});

// borrar ultimo
btnBorrar.addEventListener("click", function() {
    let items = lista.getElementsByTagName("li");

    if (items.length > 0) {
        lista.removeChild(items[items.length - 1]);
    } else {
        alert("No hay elementos para borrar");
    }
});
