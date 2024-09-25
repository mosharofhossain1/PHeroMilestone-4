const person = {
    name: 'Sodor Uddin',
    age: 34,
    Profession: 'Web developer',
    salary: 50,
    married: true,
    area: ['Dhaka', 'Bonani'],
    'fav places': ['BandorBan', 'Najirhat']
}
console.log(person);


// Object property access system

// console.log(person)

// dot notation use kore object er property er value access kora
// console.log(person.salary);
const income = person.salary;
console.log(income)

// breaket notation 

// console.log(person['age']);
const personProfession = person['Profession'];
console.log(personProfession);
// 

// error
// console.log(person.'fav places')

// valid 
console.log(person['fav places']);