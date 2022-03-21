let autos = ['Ford','Mazda','Toyota','Honda'];

//while

/*let i = 0;

while(i < autos.length){
 console.log(autos[i]);
 i++;
}

let j = 0;
do{
    console.log('do while:'+autos[j]);
    j++;
}while( j < autos.length);
*/

//Ciclo For

let hero = ['Superman','Batman','Mujer Maravilla','Flash'];

for(let i = 0; i < hero.length; i++) {
    console.log(hero[i]);
}

for( let j in hero){
    console.log('Segunda Opcion:',hero[j]);
}

for( let heroes of hero){
    console.log('Tercera Opcion:', heroes );
}
