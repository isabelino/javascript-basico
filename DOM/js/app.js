let boton = document.getElementById('accion');
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');

function cambiar(){
    titulo.innerHTML="Esto es otro titulo";
    parrafo.style.color="red";
}

boton.onclick = cambiar;