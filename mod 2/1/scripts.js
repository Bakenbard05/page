let n = prompt("Введите число n:");
let count = 1;
for(let i = 2; i <= n / 2; i++){
    if(Math.abs(n) % i === 0) count++;
}
if(count < 2) alert("Число n простое");
else alert("Число n не простое");