// toLowerCase();
// toUpperCase();

const school = 'Bowla seCandary Hight scHool';
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am a good Student');
}
else {
    console.log('bad student')
}

// trim()
// trimstart()
// trimend()

const drink = 'Water';
const liquid = ' Water ';

if (drink.trim() === liquid.trim()) {
    console.log('Water is life')
}
else {
    console.log('liquuid is dangares')
}