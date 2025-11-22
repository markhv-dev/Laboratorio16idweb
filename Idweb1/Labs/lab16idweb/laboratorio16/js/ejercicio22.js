// Laboratorio 16 - Ejercicio 22
// Autor: Mark hancco

let formulario = document.getElementById("formulario");
let divPerfil = document.getElementById("perfil");

// al cargar la pagina, verificar si hay perfil guardado
window.addEventListener("load", function() {
    cargarPerfil();
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let pais = document.getElementById("pais").value;

    // crear objeto
    let perfil = {
        nombre: nombre,
        edad: edad,
        pais: pais
    };

    // guardar en localStorage
    let jsonPerfil = JSON.stringify(perfil);
    localStorage.setItem("perfil", jsonPerfil);

    alert("Perfil guardado!");
    cargarPerfil();

    // limpiar formulario
    formulario.reset();
});

function cargarPerfil() {
    let datos = localStorage.getItem("perfil");

    if (datos) {
        let perfil = JSON.parse(datos);
        divPerfil.innerHTML = `
            <h3>Perfil Guardado:</h3>
            <p><strong>Nombre:</strong> ${perfil.nombre}</p>
            <p><strong>Edad:</strong> ${perfil.edad}</p>
            <p><strong>Pais:</strong> ${perfil.pais}</p>
        `;
    } else {
        divPerfil.innerHTML = "<p>No hay perfil guardado</p>";
    }
}
