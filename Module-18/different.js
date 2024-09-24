// odd Numbers

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i)
// }

// even numbers
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// even numbers
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 1) {
//         console.log(i)
//     }
// }

// odd Numbers

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// give me the list Numbers between 1 to 30 dibisible by 5 

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }
// }

// give me some of the numbers from 1 to 20  thate are divisible by 3 
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i)
        sum = sum + i;
        console.log('sum :', sum)
    }
}
console.log('The Numbers Sum :', sum)