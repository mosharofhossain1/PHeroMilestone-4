// for loop break system
/* for (let i = 1; i <= 150; i++) {
    console.log(i);
    if (i >= 15) {
        break;
    }
}
console.log('life after break up');
 */

// while loop break system

/* let n = 1;
while (n <= 10) {
    n++;
    console.log(n);
    if (n >= 5) {
        break;
    }
}
console.log('life after break up') */

// Continue statement 

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i)
}