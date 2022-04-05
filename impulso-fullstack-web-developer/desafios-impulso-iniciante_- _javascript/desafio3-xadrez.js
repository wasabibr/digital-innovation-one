let lines = gets().split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[1]);

//Complete os espaços em branco com uma possível solução para o problema
if(((parseFloat(l) % 2 == 0) && (parseFloat(c) % 2 == 0)) || ((parseFloat(l) % 2 != 0) && (parseFloat(c) % 2 != 0))){
  print("1");
} else {
  print("0");
}