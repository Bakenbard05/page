class Student{
    constructor(group){
        this.group = group;
    }
    toString() {
        return "Student from group " + this.group;
    }
}


function findSame(array1, array2){
    // let array_to_search = array1.length > array2.length ? array1 : array2;
    // console.log(array_to_search)
    let ret = new Set();
    array1.forEach(item => {
        if(array2.includes(item)){
            ret.add(item);
        }
    });

    return ret;
}

function entryCount(array){
    let ret = new Map();
    array.forEach(item => {
        let count = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] === item){
                count++;
            }
        }
        ret.set(item, count);
    });
    return ret;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function maxValueKey(dict){
    let max = -2143141244124125412515251;
    let result = "";
    for (let key of dict.keys()) {
        let value = dict.get(key);
        if(value > max){
            max = value;
            result = key;
        }
    }
    return result;
}

// ЗАДАНИЕ 1

let array1 = [1, 2, 3, 5, 6, 7];
let array2 = [1, 2, 3, 5, 5, 2, 7];

console.log("TEST OF findSame#1");
console.log(findSame(array1, array2));

array1 = [1, 2, 3, 5, 6, 7, 8, 3, 12, 51, 6];
array2 = [1, 2, 3, 5, 5, 2, 7, 5, 126, 6, 8, 4, 15, 3, 12];

console.log("TEST OF findSame#2");
console.log(findSame(array1, array2));

// ЗАДАНИЕ 2

console.log("TEST OF entryCount#1");
console.log(entryCount(array1));

console.log("TEST OF entryCount#2");
console.log(entryCount(array2));



// ЗАДАНИЕ 3

let students = [];
// Создание студентов с разными группами
for(let i = 0; i < 15; i++){
    students.push(new Student(getRandomInt(4).toString()));
}
let temp = [];
students.forEach(student => {
    temp.push(student.group);
});
let count = entryCount(temp);
console.log("Студенты:")
console.log(students);
console.log(count);
console.log("В самой большой группе " + Math.max(...count.values()).toString() + " человек");
console.log("Это группа №" + maxValueKey(count));