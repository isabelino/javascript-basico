let juegos = ['Zelda','Mario Kart','Metroid','Tetris'];

//length es para saber la longitud del arreglo
//console.log(juegos.length);

console.log(juegos);

//recorrer
juegos.forEach((elemento,indice,arr) => {
       // console.log({elemento,indice,arr});
});

//push agrega un elemento al final del arreglo

let respuesta = juegos.push("Ice Climer");
console.log(juegos);
console.log("Retorno de push:",respuesta);
//unshift agrega un elemento al principio del arreglo
let respuesta2= juegos.unshift('F-Zero');
console.log("Retorno de unshift:",respuesta2);
console.log(juegos);

//pop borra el ultimo elemento del array

let respuesta3 = juegos.pop();
console.log("Retorno de pop:",respuesta3);

console.log(juegos);

//borrar elementos especificos del array splice

juegos.splice(1,1);

console.log(juegos);

//encontrar posición de un array

let posicionJuego = juegos.indexOf('Tetris');

console.log( {posicionJuego,juegos });