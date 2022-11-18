const nombreAux="Valentin";
const apellidoAux="Olivero";
const persona ={
 nombre:nombreAux,
 apellido:apellidoAux
};

console.log(persona);

sessionStorage.setItem("storage", persona);
localStorage.setItem("local", persona);
document.cookie="cookie=valentin;expires="+new Date(2022, 0, 1, 12, 26).toUTCString()