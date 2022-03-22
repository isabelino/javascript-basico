/*let mensaje:string = 'hola mundo typescript';
let edad:number =10;
let nombre:string = "Rolando";

console.log(mensaje+" edad: "+edad);*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//tipos de valores boolean
/*let estadoCivil:boolean = false;
estadoCivil = true;

if(estadoCivil){
    console.log("casado");
}else{
    console.log("soltero");
}*/
//tipos de valores number
/*let numero:number = 12.50;
let edad:number = 18;

if(edad >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

edad = obtenerEdad();

function obtenerEdad():number{
    return 10;
}*/
//Tipos String cadenas
/*let nombre:string = "Jose";
let apellido:string = "Garcia";

let resultado:string = nombre+"  "+apellido;
console.log(resultado);

let concatenar:string = `nombre: ${nombre} apellido: ${apellido}`;
console.log(concatenar);*/
//tipos array
/*let nombres:string[] = ["Hernan","Luis","Pedro"];
console.log(nombres);

let datos:[string,number];
datos = ["Hola",12];
console.log(datos);*/
//enums
/*
enum Estado{
    activo = 2,
    inactivo = 5
}

console.log(Estado.inactivo);*/
//tipo any
/*let cualquierValor:any;
console.log(cualquierValor);

cualquierValor = "Hola";
console.log(cualquierValor);

cualquierValor = false;
console.log(cualquierValor);

cualquierValor = 12;
console.log(cualquierValor);*/
//void
/*
function saludo():void{
    console.log("hola desde function void");
}

let valor = saludo();
*/
//null y undefined
/*
let monto:number = null;
let miVariable:any;

console.log(monto);
console.log(miVariable);

console.log(typeof monto);
console.log(typeof miVariable);
*/
//type assertions
/*let valor:any = "Hola soy una cadena";

let resultado:number = valor.length;
let resultado2: number = (valor as string).length;
let resultado3: number = (<string> valor).length;

console.log(resultado2);*/
//constantes
/*const estado:boolean = false;
console.log(estado);
if(true){
    const estado:boolean = true;
    console.log(estado);
}else{

}


for( const iterator of [1,2,3,4,5,6,7]){
    console.log(iterator);
}*/
//array destructuring
/*let frutas:string[] = ['Manzana',"Uva","Piña"];

let [item1,item2,item3] = frutas;

console.log(item1);
console.log(item2);
console.log(item3);

*/
//tuple destructuring
/*
let persona: [ string[],number,string,string[] ];

persona =[ ["Luis","Perez"],24,"masculino",["musica","lectura"] ];

let [nombre,edad,genero,intereses] = persona;

console.log(nombre);
console.log(intereses);*/
//object destructuring
/*let persona = {
    nombre: ["Luis","Garcia"],
    edad: 34,
    genero:"masculino",
    intereses: ["musica","libros"]
};

let { nombre,edad,genero,intereses } = persona;

console.log(nombre);
*/
//spread operador de propagación
/*
let libro = {
    autor:"Oscar",
    titulo:"La perla perdida",
    fecha: new Date(2020,1,4)
};

let vehiculo={
    color:"Negro",
    puerta:"A3",
    marca: "Toyota"
}

let agrupar = { prueba:"hola", ...libro , ...vehiculo };

console.log(agrupar);
*/
/*
function obtenerValores( objecto:{ valor1: string, valor2:number}){
    let {valor1, valor2} = objecto;
    //console.log(valor1);
    //console.log(valor2);
}

obtenerValores( { valor1:"Camisa Azul" });

function saludar(texto?:string){
    console.log(texto);
    console.log("igual ingresa aqui")
}


saludar();*/
//clases
/*
class Persona {
    nombre:string ="Maria";
    apellido:string;
    edad:number;
    fechaNac:Date;

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

let persona = new Persona("Juana");
console.log(persona);

//herencia

class Estudiante extends Persona{
    numeroCarnet:number;

    constructor(nombre:string,numero:number){
        super(nombre);
        this.numeroCarnet= numero;
    }
}

let estudioso = new Estudiante("Lucas",12121212);
console.log(estudioso);*/
//modificadores de acceso
var Estudiante = /** @class */ (function () {
    function Estudiante() {
    }
    Estudiante.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    return Estudiante;
}());
var jose = new Estudiante();
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nombreCompleto = _this.obtenerNombre();
        return _this;
    }
    return Empleado;
}(Estudiante));
