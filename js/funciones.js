
function saludar(nombre,apellido){
    console.log('hola como estas',nombre+" "+apellido);
}

const saludar2 = function(nombre,apellido){
    console.log("Hola 2",nombre+" "+apellido);
}

const saludar3 = (nombre,apellido) => {
    console.log('Hola 3', nombre+" "+apellido);
}

saludar('Rolando','Lopez');
saludar2('Luis','Garcia');
saludar3('Juan','Perez');


function suma(a,b){
    return a+b;
}

const suma2 = (a,b)=>{
    return a+b;
}

console.log('La suma es: ' + suma(10,5));
console.log('La suma es: '+ suma2(20,15));