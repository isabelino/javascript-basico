let personaje = {
  nombre: 'Tony Stark',
  nombreClave:'Iron Man',
  vivo: false,
  edad: 40,
  cordenadas:{
      lat: 0.23232323,
      lng:-33.232323
  },
  trajes:['Mark I','Mark XXV','Hulkbuster'],
  direccion:{
      zip:'1088 , 90265',
      ubicacion:'Malibu,California'
  }  
};

console.log(personaje);
console.log('Nombre',personaje.nombre);
console.log('Edad',personaje['edad']);
console.log('Zip',personaje.direccion.zip);
console.log('Ultimo Traje',personaje.trajes[personaje.trajes.length-1]);

console.log("Vivo",personaje.vivo);


//borrar una variable dentro del objeto
delete personaje.edad;
console.log(personaje);

//agregar variable dentro del objeto
personaje.casado = true;
console.log(personaje);

//para verlo como conjunto de array clave-valor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
//para verlo como un array entero
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

//vista de array y valores
const propiedades2 = Object.values(personaje);
console.log({propiedades2,propiedades2});