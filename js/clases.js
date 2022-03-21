
class Persona{

    nombre = '';
    codigo = '';
    frase = '';
    _comida='';
    static _conteo=0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }



    constructor(nom,cod,fra){
        this.nombre = nom;
        this.codigo = cod;
        this.frase = fra;
        Persona._conteo++;
    }

     comida(comida){
        this.comida = comida;
    }

    comida(){
        return this.comida;
    }

}

let spiderman = new Persona('Peter Parker','Spiderman','Tu vecino amigable');

spiderman.comida('Paella');
console.log(spiderman.comida);
console.log(spiderman);

let ironman = new Persona('Tony Stark','Ironman','Yo soy Ironman');

ironman.comida('Cachopo');
console.log(ironman.comida);


console.log(ironman);

console.log(Persona.conteo);


