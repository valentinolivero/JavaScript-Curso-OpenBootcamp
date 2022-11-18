/* - Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

const listaDeCompra= ["Agua", "Lavandina", "Shampoo", "Gel de pelo", "Queso"];

listaDeCompra.push("Aceite de Girasol");
console.log(listaDeCompra);

listaDeCompra.pop("Aceite de Girasol");
console.log(listaDeCompra);

const peliculasFav =[
    {titulo: "Bastardos sin gloria", director: "Tarantino", fecha: new Date(2009, 8, 1)},
    {titulo: "Once Upon", director: "Tarantino", fecha: new Date(2019, 10, 7)},
    {titulo: "Spiderman", director: "Sam Raimi", fecha: new Date(2002, 4, 3)}      ]; 

console.log(peliculasFav);

const filtradaPorFecha=peliculasFav.filter(obj => obj.fecha> new Date(2010, 0, 1));
console.log("Post 2010:");
console.log(filtradaPorFecha);


const directores= peliculasFav.map((obj, i) =>`${obj.director}` );
console.log(directores);

const titulos=peliculasFav.map((obj, i) =>`${obj.titulo}` );
console.log(titulos);

const directoresYTitulos = directores.concat(titulos);
console.log(directoresYTitulos);

const directoresYTitulos2 = [...directores, ...titulos];
console.log(directoresYTitulos2);
