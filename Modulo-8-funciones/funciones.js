/*- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */

function siempreTrue(){
    return true;
}
/* console.log(siempreTrue());

function asíncronica(){}
const miPromesa= new Promise((resolve, reject)=>{
    const limite=Math.floor(Math.random()*2);
    if (limite!==0){
        resolve();
    }else{
        reject()
    }
});

miPromesa 
.then(()=> console.log("Hola mundo"))
.catch(()=> console.log("error"))
.finally(()=> console.log("fin"))


*/


function asincronica(){
    setTimeout(function(){
        console.log("Hola Mundo");
    }, 5000);
    
    
}
//console.log(bucle(5));
console.log(asincronica());
console.log(asincronica());
console.log(asincronica());
console.log(asincronica());
console.log(asincronica());

function* generaID(){
    let id=0;
    while(true){
        id=id+2;
        if(id>10){
            return;
        }yield id; 
    }
}
const gen= generaID();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

