// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar
const numTotal = parseInt(gets());
const numFigCompradas = parseInt(gets());
const setFig = new Set();

for(   let i = 0; i < numFigCompradas; i++ ){
  let fig = parseInt(gets());
  if(fig > 0){
    setFig.add(    fig  );
  }
}

var numFigSemDuplicata = setFig.size;

print(numTotal >= numFigSemDuplicata ? numTotal - numFigSemDuplicata : 0 )