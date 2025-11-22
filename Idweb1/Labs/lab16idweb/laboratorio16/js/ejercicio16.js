// Laboratorio 16 - Ejercicio 16
// Autor: Mark hancco

// arreglo de productos
let productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Teclado", precio: 150 }
];

// convertir a JSON
let jsonProductos = JSON.stringify(productos);
console.log("JSON:", jsonProductos);

// volver a objeto
let productosObjeto = JSON.parse(jsonProductos);
console.log("Objeto:", productosObjeto);

let btn = document.getElementById("btnMostrar");
let lista = document.getElementById("listaProductos");

btn.addEventListener("click", function() {
    lista.innerHTML = ""; // limpiar lista

    // mostrar nombres en la lista
    for (let i = 0; i < productosObjeto.length; i++) {
        let li = document.createElement("li");
        li.textContent = productosObjeto[i].nombre + " - S/. " + productosObjeto[i].precio;
        lista.appendChild(li);
    }
});
