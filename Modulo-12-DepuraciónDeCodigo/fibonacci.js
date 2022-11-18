function fibonacci(num){
    
    let aux1=0;
    let aux2=1;
    let f=0;
    for(let i=0;i<num;i++){
       aux1=aux2;
       
       aux2=f;
       f=aux1+aux2;
    }
      return f;
}
console.log(fibonacci(6));