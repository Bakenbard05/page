let n = Number(prompt("Введите число n:"));
let count = 1;
while(isNaN(n)){
    n = Number(prompt("Введите число n:"));
    
}
for(let i = 2; i <= Math.sqrt(Math.abs(n)); i++){
    if(Math.abs(n) % i === 0) count++;
}
if(count < 2) alert("Число n=" + String(n) + " простое");
else alert("Число n=" + String(n) + " не простое");


