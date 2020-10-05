'use strict';

// 1. display in the console the numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// 2. display in the console the odd numbers from 1 to 20
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}



// 3. compute the sum of the elements of an array and display it in the console
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);



// 4. compute the maximum of the elements of an array and display it in the console 

const maxArray = [10, 857, 122, 10, 15, 4, 182, 0];
const maxNr = maxArray.length
console.log(maxNr);



// 5. compute how many times a certain element appears in an array
const array2 = [1, 2, 4, 3, 4, 1, 5, 6, 4, 7, 8, 9, 1, 10, 1];

function countNumber(param1, param2) {
    let counter = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === param1)
            counter += 1;
        }
        console.log(`The number appears: ${counter} times.`);
}
countNumber(4, array2)



