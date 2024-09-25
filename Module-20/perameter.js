function vaatKaw() {
    console.log('Hand Wash koro')
    console.log('Boso')
    console.log('plate ea bat neya')
}

// vaatKaw();

// Declear a perameter
function square(number) {
    // console.log(number)
    console.log('Value of the number parameter :', number);
    const borgo = number * number;
    console.log('Square of the given number is : ', borgo)
}
square(5);
console.log('----------------------')
square(45);
square(596);


// multiple perameter 
function sum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum)
}
sum(5, 3);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e)
    console.log(total);
}
addAll(2, 3, 4, 5, 6);


// one argument is missing system
function addAllSum(a, b, c, d, e) {
    const sumation = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(sumation);
}
addAllSum(3, 4, 5, 6);
