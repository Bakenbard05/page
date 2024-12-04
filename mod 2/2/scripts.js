function mult2of3(a, b, c){
    ar = [a, b, c];
    console.log(ar);
    m1 = Math.max(...ar);
    ar.pop(ar.findIndex(value => m1));
    m2 = Math.max(...ar);
    return m1 * m2;
}

a = Number(prompt("Число a: "));
b = Number(prompt("Число b: "));
c = Number(prompt("Число c: "));
alert("Произведение двух максимальных чисел: " + String(mult2of3(a, b, c)));




