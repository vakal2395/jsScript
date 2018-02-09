// var a=Number(prompt("input firs number"));

var a=Number(prompt("input firs number"));

var result = 1;
var i = 1;
while (i <= a) {
result = result * i;
i++;

document.write(result +" ");
}


// var result = 1;
// var i = 1;
// do {
// result = result * i;
// i++;
// }
// while (i <= a){
// document.write(result);
// }
// var i = 0;
  
while (i <= 100) {
  i++;
  if (i%3 == 0 && i%2==1) {
   console.log(i + ' ');
  }
  
}
