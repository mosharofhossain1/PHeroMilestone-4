/* 
    ** Objective : write a function to give me the sum of all numbers in an array 
    * Step-1 : declear a function
    * Step-2 : call check whether the function is called properly
    * Step-3 : set a parameter(s)
    * Step-4 : pass the parameter(s), check wether parameter is passed in a peoper format 
    * Step-5 : do the function tasks (step by step)
    * 
*/

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number
    }
    return sum;
}
const nums = [34, 45, 67, 78];
const sum = sumOfNumbers(nums);
console.log('sum of Numbers :', sum);
