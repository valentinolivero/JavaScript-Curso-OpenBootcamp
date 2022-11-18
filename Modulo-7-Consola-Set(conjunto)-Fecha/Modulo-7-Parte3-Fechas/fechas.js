/* Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */
let fechaHoy= new Date();
let fechaDeNacimiento= new Date("october one 1999");
console.log("fecha hoy:"+ fechaHoy, "fecha nac: "+fechaDeNacimiento)

let verificar= (fechaHoy>fechaDeNacimiento);
console.log(verificar)

let diaDeNac =fechaDeNacimiento.getDate();
let mesDeNac= fechaDeNacimiento.getMonth()+1;
let anyoDeNac= fechaDeNacimiento.getFullYear();

console.log(diaDeNac+"/"+mesDeNac+"/"+anyoDeNac);
