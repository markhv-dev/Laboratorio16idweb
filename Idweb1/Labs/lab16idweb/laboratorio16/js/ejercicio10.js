// Laboratorio 16 - Ejercicio 10
// Autor: Mark hancco

const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 800 }
];

let btn = document.getElementById("btnGenerar");
let contenedor = document.getElementById("contenedor");

btn.addEventListener("click", function() {
    // crear tabla
    let tabla = document.createElement("table");

    // crear encabezado
    let encabezado = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "Nombre";
    let th2 = document.createElement("th");
    th2.textContent = "Precio";
    encabezado.appendChild(th1);
    encabezado.appendChild(th2);
    tabla.appendChild(encabezado);

    // crear filas con datos
    for (let i = 0; i < productos.length; i++) {
        let fila = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = productos[i].nombre;

        let td2 = document.createElement("td");
        td2.textContent = "S/. " + productos[i].precio;

        fila.appendChild(td1);
        fila.appendChild(td2);
        tabla.appendChild(fila);
    }

    // limpiar y mostrar
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
});
