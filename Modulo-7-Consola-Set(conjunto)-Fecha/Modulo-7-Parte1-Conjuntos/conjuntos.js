/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)*/
//const nombre= {nombre :["Valentin", "Daniela", "Jose"]};
const miSet =new Set(["Valentin", "Daniel", "Josefina"]);

console.log(miSet.add("Valentin"))

miSet.add("Javascript")
console.log(miSet)


