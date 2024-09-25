// Looping technicque 
/* 
********
* 1. for loop- >
* 2. while loop -
* 3. do while - 
* 4. for of -> Array loop korar jonno use kora hoy
* 5. for in -> Object loop korar jonno
*/

const frends = ['elon', 'Bill', 'Mark', 'Waren'];

// normal way
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// array ke normal for loop use kore looping kora 
for (let i = 0; i < frends.length; i++) {
    // console.log(frends[i])
}

// array ke for of loop use kore looping kora 
for (const friend of frends) {
    // console.log(friend)
}

const numbers = [23, 44, 567, 788, 21, 34, 6767];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
}

// normal while loop use kore loop kora

let i = 0;
while (i < frends.length) {
    // console.log(frends[i]);
    i++
}
let n = 0;
while (n < numbers.length) {
    console.log(numbers[n])
    n++;
}