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
     comidaFavorita(comida){
        this._comida = comida;
    }

    comida(){
        return this._comida;
    }

}

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre,codigo,frase,clan){
        super(nombre,codigo,frase)
        this.clan = clan;
    }

}

let hulk = new Heroe('Banner','Hulk','Hulk Aplasta','Vengadores');
hulk.comidaFavorita('Tallarines');
console.log(hulk.comida());

console.log(hulk);