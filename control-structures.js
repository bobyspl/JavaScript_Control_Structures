'use strict';

// 1. display in the console the numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log('break');





// 2. display in the console the odd numbers from 1 to 20
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log('break');






// 3. compute the sum of the elements of an array and display it in the console
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

console.log('break');







// 4. compute the maximum of the elements of an array and display it in the console 

const maxArray = [10, 857, 122, 10, 15, 4, 182, 0];
const maxNr = maxArray.length
console.log(maxNr);



