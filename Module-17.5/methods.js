const friends = ['Kalam', 'salam', 'balam'];
const numbers = [];
const name = 'Mosharof';

// Array.isArray 
console.log(Array.isArray(friends));
console.log(Array.isArray(numbers));
console.log(Array.isArray(name));

// array includes()
console.log(friends.includes('kalam'));
if (friends.includes('balam')) {
    console.log('party Mashup')
}
else {
    console.log('No Party')
}

// indexOf()
console.log(friends.indexOf('kalam'))
// Some array methods

// 1. Slice()
// 2. Splice()
// 3. Concat()
// 4. join()
// 5. includs()
// 6. indexOf()