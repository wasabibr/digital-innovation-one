const positives = [];

let positivos = 0;

for (let i = 0; i < 6; i++) {
   let valor = Number(gets());

   if ( valor  >  0  ) {
      positives.push(valor);
      positivos += 1 ;
   }
}

console.log(positivos + " valores positivos");
var soma = positives.reduce(function(a, b){
    return a + b;
}, 0);
var averange = (soma / positives.length)
var numbertrunc = Math.trunc(averange*10)/10
var numberround = Math.round(averange*10)/10
var diff = (numberround - averange);

if(diff < 0.049)
  console.log(numberround);
else 
  console.log(numbertrunc);