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
person.salary = 56000;
person['area'] = 'Coxs Bazsr';
console.log(person);

const propName = 'Profession';
person[propName] = 'devOPs';
console.log(person);