// Laboratorio 16 - Ejercicio 15
// Autor: Mark Hancco

const cadenaJSON = '{"nombre": "Ana", "edad": 22, "carrera": "Ingenieria de Sistemas"}';

const objeto = JSON.parse(cadenaJSON);

const resultado = document.getElementById("resultado");
resultado.textContent = `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}, Carrera: ${objeto.carrera}`;

console.log("Cadena JSON:", cadenaJSON);
console.log("Objeto parseado:", objeto);
