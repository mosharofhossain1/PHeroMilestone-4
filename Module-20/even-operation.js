// Even Number OPeration  

function evenNumbers(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number)
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [2, 4, 7, 77, 43, 68, 93];
const sum = evenNumbers(numbers);
console.log('Even Numbers are in array : ', sum)

// array even number sum system 
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number)
            sum = sum + number;
        }
    }
    return sum
}

const sumation = sumOfEvenNumbers(numbers);
console.log('sum of the even number Is ', sumation);

