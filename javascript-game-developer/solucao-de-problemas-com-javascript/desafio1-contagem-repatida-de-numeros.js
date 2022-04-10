let N = 7;
let arrayVal = [8,10,8,260,4,10,10];

/*
for(let j = 0; j < N; j++) {
  arrayVal = gets();
}
*/

const ordenaLista = arrayVal.sort((a, b) => a - b );
const listaUnicos = [...new Set(ordenaLista)];

const aux = parseInt(listaUnicos.length);

let contador = 0;

for(let i = 0; i < listaUnicos.length; i++) {
  for(let j = 0; j < N; j++) {
    if(listaUnicos[i] == ordenaLista[j]){
      contador++;
    }
  }
  console.log(`${listaUnicos[i]} aparece ${contador} vez(es)`);
  contador = 0;
}