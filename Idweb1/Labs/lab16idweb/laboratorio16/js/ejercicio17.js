// Laboratorio 16 - Ejercicio 17
// Autor: Mark hancco

let btnGuardar = document.getElementById("btnGuardar");
let btnCargar = document.getElementById("btnCargar");
let resultado = document.getElementById("resultado");

// objeto con datos de usuario
let usuario = {
    nombre: "Juan Perez",
    correo: "juan@email.com",
    rol: "estudiante"
};

btnGuardar.addEventListener("click", function() {
    // convertir a JSON y guardar
    let jsonUsuario = JSON.stringify(usuario);
    localStorage.setItem("miUsuario", jsonUsuario);
    alert("Usuario guardado en localStorage");
});

btnCargar.addEventListener("click", function() {
    // recuperar de localStorage
    let datos = localStorage.getItem("miUsuario");

    if (datos) {
        let usuarioRecuperado = JSON.parse(datos);
        resultado.innerHTML = `
            <p><strong>Nombre:</strong> ${usuarioRecuperado.nombre}</p>
            <p><strong>Correo:</strong> ${usuarioRecuperado.correo}</p>
            <p><strong>Rol:</strong> ${usuarioRecuperado.rol}</p>
        `;
    } else {
        resultado.innerHTML = "<p>No hay datos guardados</p>";
    }
});
