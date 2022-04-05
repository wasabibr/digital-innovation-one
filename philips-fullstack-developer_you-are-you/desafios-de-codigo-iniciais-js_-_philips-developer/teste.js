// Trabalhando algumas ideias do desafio 3

const numTotal = 4;
const numFigCompradas = 6;

const setFig = new Set()

const fig = [1, -1, 3, 2, -2, 1];

for(   let i = 0; i < numFigCompradas; i++ ){
   if(fig[i] > 0){ 
    setFig.add(    fig[i]  );
   }
  }

  console.log(setFig);  
var numFigSemDuplicata = setFig.size;
console.log(numFigSemDuplicata);  
console.log(numTotal >= numFigSemDuplicata ? numTotal - numFigSemDuplicata : 0 )