let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');


formulario.addEventListener('submit', function(e){
e.preventDefault();

console.log('llamando al formulario');

let datos = new FormData(formulario);

fetch('post.php',{
    method: 'POST',
    body: datos
}).then( resp => resp.json() )
  .then( data => {
      if(data === 'error'){
          respuesta.innerHTML = ` 
            <div class="alert alert-danger" role="alert">
            Debes enviar todos los campos
            </div>
          `
      }else{
        respuesta.innerHTML = ` 
            <div class="alert alert-primary" role="alert">
            ${data}
            </div>
        `
      }
  }) ;

});


let contenido= document.getElementById('contenido');

function obtener(){

    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then( data =>{
        console.log(data.results['0'].name.first);

        contenido.innerHTML = ` 
            <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
            <p>Nombre:${data.results[0].name.first}<p>
            <p>Apellido:${data.results[0].name.last}<p>
        `;
    })

}