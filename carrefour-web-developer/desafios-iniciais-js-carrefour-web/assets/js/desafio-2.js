let limit = parseInt(gets());

for (let i = 1; i <= limit; i++) {
  let X = parseInt(Math.pow(i,1));
  let Y = parseInt(Math.pow(i,2));
  let Z = parseInt(Math.pow(i,3));
  //print(X + " " + Y + " " + Z);
  console.log(X + " " + Y + " " + Z);
}