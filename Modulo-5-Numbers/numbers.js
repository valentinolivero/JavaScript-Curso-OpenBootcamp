/*- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

let alturaInt= 170;
let alturaFloat= 1.7;
let pesoFloat=68.5;
let alturaRedondeandoArriba= Math.round(alturaFloat);
console.log(alturaRedondeandoArriba);
let pesoRedondeandoHaciaAbajo=Math.floor(pesoFloat);
console.log(pesoRedondeandoHaciaAbajo);

let maximaValorEnJS= Number.MAX_VALUE + 1;
console.log(maximaValorEnJS);
let flag=maximaValorEnJS == Number.MAX_VALUE;
console.log("El maximo valor de js + 1 es igual  al maximo valor en js? = "+flag);