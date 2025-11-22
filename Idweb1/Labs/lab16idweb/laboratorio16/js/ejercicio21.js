// Laboratorio 16 - Ejercicio 21
// Autor: Mark hancco

// JSON con lista de tareas
let jsonTareas = `[
    {"titulo": "Hacer ejercicios", "completada": true},
    {"titulo": "Estudiar para examen", "completada": false},
    {"titulo": "Entregar laboratorio", "completada": true},
    {"titulo": "Revisar correos", "completada": false}
]`;

let btn = document.getElementById("btnMostrar");
let lista = document.getElementById("listaTareas");

btn.addEventListener("click", function() {
    // parsear JSON
    let tareas = JSON.parse(jsonTareas);

    lista.innerHTML = ""; // limpiar

    // crear lista dinamicamente
    for (let i = 0; i < tareas.length; i++) {
        let li = document.createElement("li");
        li.textContent = tareas[i].titulo;

        // poner color segun estado
        if (tareas[i].completada) {
            li.className = "completada";
            li.textContent += " (Completada)";
        } else {
            li.className = "pendiente";
            li.textContent += " (Pendiente)";
        }

        lista.appendChild(li);
    }
});
