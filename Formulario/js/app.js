
//impresenion de datos dentro del cuerpo o body del html
//document.write('Esto es Javascript DOM');
function datos(){
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let edadNum = parseInt(edad)*100;
    document.getElementById('datos').innerHTML = "Nombre: "+nombre+" Edad: "+edadNum;
}
document.getElementById('enviar').addEventListener("click", datos);
//document.getElementById('enviar').onclick = datos;

const dias=['lunes','martes','miercoles','jueves','viernes'];

for (let i = 0; i < dias.length; i++) {
    document.getElementById('dias').innerHTML += "<li>"+dias[i]+"</li>";
}