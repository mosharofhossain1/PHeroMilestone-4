// reverse
const numbers = [1, 2, 3, 4, 5, 6, 7];
// const reverse = numbers.reverse();
// console.log(reverse);


// for of reverse loop
const rev_Numbers = [];
for (const num of numbers) {
    rev_Numbers.unshift(num)
}
// console.log(rev_Numbers)

// normal loop reverse
const reversed_Number = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    reversed_Number.unshift(num)
}
// console.log(reversed_Number);

// reverse side for 
const rev_rev_Numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    rev_rev_Numbers.push(num)
}
console.log(rev_rev_Numbers)