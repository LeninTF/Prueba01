//uso de variables y constantes
const servicios = ["Diseño Web", "Desarrollo de Software", "Marketing Digital", "Consultoría IT", "Soporte Técnico"];
let usuario = "";
let clickCount = 0;
// Función para saludar al usuario usando prompt y alert 
function saludoUsuario() {
    usuario = prompt("Por favor, ingresa tu nombre:");
    if (usuario) {
        alert(`¡Hola, ${usuario}! Bienvenido a nuestro sitio web.`);
        console.log(`Usuario ingresado: ${usuario}`);
    } else {
        alert('No ingresaste un nombre. ¡Bienvenido!');
        console.warn('El usuario no ingresó un nombre.');
    }
}
// Funcion para cambiar el color de fondo segun la seleccion del usuario
function cambiarColorFondo() {
    const colorSeleccionado = document.getElementById("color").value;
    document.body.style.backgroundColor = colorSeleccionado;
    console.log(`Color de fondo cambiado a: ${colorSeleccionado}`);
    alert(`El color de fondo ha sido cambiado a ${colorSeleccionado}`);
}

// Función con estructuras de control y arreglo para mostrar los servicios disponibles
function mostrarServicios() {
    let mensaje = "Servicios disponibles:\n";
    for (let i = 0; i < servicios.length; i++) {
        mensaje += `${i + 1}. ${servicios[i]}\n`;
    }
    alert(mensaje);
    console.log('Servicios mostrados: \n', mensaje);
}

//Funcion con confirm y operadores para calcular un promedio simple
function calcularPromedio() {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i}: (de o a 20): `));

        //validacion de entrada
        if (isNaN(nota) || nota < 0 || nota > 20) {
            alert("Por favor, ingresa un número válido entre 0 y 20.");
            console.error("Entrada no válida para la nota.");
            return;
        }
        notas.push(nota);
    }
    const suma = notas[0] + notas[1] + notas[2];
    const promedio = suma / 3;

    let mensaje = `El promedio de los números ingresados es: ${promedio.toFixed(2)} \n`;
    mensaje += promedio >= promedio >= 13 ? 'Aprobaste!' : 'Reprobaste! XD';

    alert(mensaje);
    console.log('Notas ingresadas:', notas);
    console.log('Promedio calculado:', promedio);
}
// Diagnóstico con consola y herramientas del navegador 
function diagnosticoNavegador() {
    console.log(">> Diagnóstico del Navegador:");
    console.log("Agente de usuario:", navigator.userAgent);
    console.log("Idioma:", navigator.language);
    console.log("Plataforma:", navigator.platform);
    alert("Información del navegador mostrada en consola.");
}
function mipromedio() {
let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i}: (de o a 20): `));

        //validacion de entrada
        if (isNaN(nota) || nota < 0 || nota > 20) {
            alert("Por favor, ingresa un número válido entre 0 y 20.");
            console.error("Entrada no válida para la nota.");
            return;
        }
        notas.push(nota);
    }
    const promedio = notas[0]*0.2 + notas[1]*0.2 + notas[2]*0.2 + notas[3]*0.4;
    //const promedio = suma / 4;

    let mensaje = `El promedio de los números ingresados es: ${promedio.toFixed(2)} \n`;
    mensaje += promedio >= 13 ? 'Aprobaste!' : 'Reprobaste! XD';

    alert(mensaje);
    console.log('Notas ingresadas:', notas);
    console.log('Promedio calculado:', promedio);
}
