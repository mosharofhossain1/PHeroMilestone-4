const computer = {
    brand: 'lenovo',
    price: 50000,
    processor: 'intel',
    monitor: 'Hp'
}
const values = Object.values(computer);
console.log(values)


// Nesting 
const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy debos'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college);
console.log(college.unique)
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.unique.result.gpa);
console.log(college.unique.result.merit);

console.log(college['unique'].result.gpa);
console.log(college['events'])

// value update
college.events[1] = '16 December';
college.unique.result['gpa'] = 'very good students all student'
college.unique.result.merit = 'top top top most';
console.log(college)


// delete property

delete college.class;
console.log(college)