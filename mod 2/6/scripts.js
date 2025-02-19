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

let array1 = [1, 2, 3, 5, 6, 7];
let array2 = [1, 2, 3, 5, 5, 2, 7];

console.log("TEST OF findSame#1");
console.log("ARRAY #1: ");
console.log(array1.toString());
console.log("ARRAY #2: ");
console.log(array2.toString());
console.log("RESULT: ")
console.log(findSame(array1, array2));

array1 = [1, 2, 3, 5, 6, 7, 8, 3, 12, 51, 6];
array2 = [1, 2, 3, 5, 5, 2, 7, 5, 126, 6, 8, 4, 15, 3, 12];
console.log("TEST OF findSame#2");
console.log("ARRAY #1: ");
console.log(array1.toString());
console.log("ARRAY #2: ");
console.log(array2.toString());
console.log("RESULT: ")
console.log(findSame(array1, array2));