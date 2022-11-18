/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const objeto = {nombre: "Valentin", apellido:"Olivero", edad:22, altura:1.70, eresDesarrollador: true};
console.log(objeto)
const edad= objeto.edad;
console.log(edad)



const objeto2={nombre: "Lautaro", apellido:"Gomez", edad:24, altura:1.80, eresDesarrollador: false}
const objeto3={nombre: "Ignacio", apellido:"Zolkower", edad:21, altura:1.60, eresDesarrollador: false}
const lista= [objeto, objeto2, objeto3]
console.log("A ver")
console.log(lista)

lista.sort((a, b) => b.edad - a.edad);
console.log(lista)