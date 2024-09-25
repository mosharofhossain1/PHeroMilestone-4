// Declear a string

const country = 'Bangladesh';
const division = 'Dhaka';
const thanas = String('Phulpur');
const thana = new String('Phulpur');
// console.log(typeof thanas)
// console.log(typeof thana)

const numbers = [23, 44, 21, 34, 35, 67];
console.log('This Number length : ', numbers.length);
console.log('This Number index Number : ', numbers[1]);
numbers[1] = 90;
console.log(numbers)
// String is immutable -> Not Change able
// Array Is Mutable -> you can chnage the array elements

const capital = 'Dhaka';
console.log(capital)
// console.log(capital[3]);
capital[0] = 'F';
console.log(capital);
