// Laboratorio 16 - Ejercicio 13
// Autor: Mark hancco

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");
let tabla = document.getElementById("tablaUsuarios");

let editandoId = null; // para saber si estamos editando

// agregar o actualizar usuario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = inputNombre.value;
    let edad = inputEdad.value;

    if (editandoId !== null) {
        // estamos editando
        let fila = document.querySelector(`tr[data-id="${editandoId}"]`);
        fila.children[0].textContent = nombre;
        fila.children[1].textContent = edad;
        editandoId = null;
        document.getElementById("btnAgregar").textContent = "Agregar";
    } else {
        // agregar nuevo
        let id = Date.now(); // id unico
        let fila = document.createElement("tr");
        fila.setAttribute("data-id", id);

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>
                <button class="btn-editar">Editar</button>
                <button class="btn-eliminar">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);
    }

    // limpiar formulario
    inputNombre.value = "";
    inputEdad.value = "";
});

// delegacion de eventos para editar y eliminar
tabla.addEventListener("click", function(event) {
    let fila = event.target.closest("tr");

    if (event.target.classList.contains("btn-eliminar")) {
        // eliminar
        fila.remove();
    }

    if (event.target.classList.contains("btn-editar")) {
        // editar - cargar datos en formulario
        let nombre = fila.children[0].textContent;
        let edad = fila.children[1].textContent;

        inputNombre.value = nombre;
        inputEdad.value = edad;
        editandoId = fila.getAttribute("data-id");
        document.getElementById("btnAgregar").textContent = "Actualizar";
    }
});
