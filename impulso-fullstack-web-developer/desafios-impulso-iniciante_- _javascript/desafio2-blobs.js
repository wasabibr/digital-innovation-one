var n = parseInt(gets());

//implemente sua solução nos espaços em branco

while (n >= 1 && n <= 1000) {
  var c = parseFloat(gets());
  var dias =0 ;
  while (c > 1 && c <= 1000) {
    c /= 2.0;
    dias++;
  }
  n--;
  print(`${dias}  dias`);
}