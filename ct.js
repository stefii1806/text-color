var aceptar = document.getElementById('aceptar');
aceptar.addEventListener('click', cambiarColor)

function cambiarColor() {
    var opciones = document.getElementById('colores');
    var texto = document.getElementById('texto');

    if (opciones.value === 'rojo') {
        texto.style.color = 'red';
    } else if (opciones.value === 'azul') {
        texto.style.color = 'blue';
    } else if (opciones.value === 'amarillo') {
        texto.style.color = 'yellow';
    } else if (opciones.value === 'verde') {
        texto.style.color = 'green';
    } else {
        texto.style.color = 'black';
    }
}