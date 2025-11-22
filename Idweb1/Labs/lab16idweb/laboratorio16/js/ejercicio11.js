// Laboratorio 16 - Ejercicio 11
// Autor: Mark hancco

let lista = document.getElementById("lista");

// usamos delegacion de eventos
// el evento se pone en el padre (ul) no en cada li
lista.addEventListener("click", function(event) {
    // verificar que se hizo clic en un li
    if (event.target.tagName === "LI") {
        // eliminar el elemento
        event.target.remove();
    }
});
