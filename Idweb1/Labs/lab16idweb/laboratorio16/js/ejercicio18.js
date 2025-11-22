// Laboratorio 16 - Ejercicio 18
// Autor: Mark hancco

// JSON con lista de libros
let jsonLibros = `[
    {"titulo": "Don Quijote", "autor": "Cervantes"},
    {"titulo": "Cien años de soledad", "autor": "Garcia Marquez"},
    {"titulo": "El principito", "autor": "Saint-Exupery"}
]`;

let btn = document.getElementById("btnGenerar");
let contenedor = document.getElementById("contenedor");

btn.addEventListener("click", function() {
    // parsear JSON
    let libros = JSON.parse(jsonLibros);

    // crear tabla
    let tabla = document.createElement("table");

    // encabezado
    let thead = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "Titulo";
    let th2 = document.createElement("th");
    th2.textContent = "Autor";
    thead.appendChild(th1);
    thead.appendChild(th2);
    tabla.appendChild(thead);

    // filas
    for (let i = 0; i < libros.length; i++) {
        let fila = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = libros[i].titulo;

        let td2 = document.createElement("td");
        td2.textContent = libros[i].autor;

        fila.appendChild(td1);
        fila.appendChild(td2);
        tabla.appendChild(fila);
    }

    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
});
