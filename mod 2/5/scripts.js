// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую среднее арифметическое нечётных
// элементов.

function variant_6(arr){
    let avg = 0.0;
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        let number = arr[i]; 
        if(number % 2) {
            avg += number;
            count++;
        }
    }
    avg = avg / count;
    return avg;
}

console.log(variant_6([3.0, 123.0, 123.0, 124.0, 512.0, 13.0, 1234.0]));
