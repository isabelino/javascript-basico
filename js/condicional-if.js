
let edad = 18;

let nombre =  "Jose";

//operador ternario

let resultado = edad === 18 ? 'si cumple' : 'no cumple';
console.log(resultado);

//operadores logicos and &&, or ||, not !


if( nombre === "Jose" && edad !== 18){
    console.log("eres bienvenido");
}

/*if(edad === 18){
    console.log("eres mayor de edad");
}else if(edad >18){
    console.log("eres mayor de 18");
}else if(edad <18){
    console.log("eres menor a 18");
}*/


//switch 

const dia =3;

switch (dia) {
    case 0:
        console.log('Lunes');    
    break;

    case 1:
        console.log('martes');
    break;

    case 2:
        console.log('miercoles');
    break;


    default:
        console.log("no es ninguno");
}


