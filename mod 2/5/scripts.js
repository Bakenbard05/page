// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую среднее арифметическое нечётных
// элементов.

function variant_6(arr){
    let avg = 0.0;
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        let number = Math.floor(arr[i]); 
        if(number % 2) {
            avg += number;
            count++;
        }
    }
    if(count != 0){
        avg = avg / count;
    }
    return avg;
}

console.log(variant_6([3.0, 123.0, 123.0, 124.0, 512.0, 13.0, 1234.0]));


// Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// элементами которого будут номера последних отрицательных
// элементов строк матрицы.
function variant_6_2(mat){
    let ret = []
    mat.forEach(line => {
        let id = -1;
        for(var i = 0; i < line.length; i++){
            if(line[i] < 0){
                id = i;
            }
        }
        if(id >= 0){
            ret.push(id);
        }
        
    });
    return ret;
}

console.log(variant_6_2([
    [0.0, 0.5, -0.5],
    [0.5, -0.5, 0.57],
    [-20.5, 0.0, -2.0],
]));
