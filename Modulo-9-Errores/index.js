const logger = require('./logger');
function esPar(numero){
  if (numero % 2 != 0) throw new Error ("Error, ese numero no es par!");
  return "Es par";
}
const numero=7;
try{
  console.log(esPar(numero));
}catch(e){
  logger.error(`${e}`);

}finally{
  console.log("fin");
}