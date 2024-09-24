/* 
******* : Ternary ---> Three Parts 
* ? 
 */


// Simple Ternary
const age = 18;
age >= 18 ? console.log('Vote Dao') : console.log('Boro Hoy Aro');

let price = 500;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}

else {
    price = price + 100
}
console.log(price);

// ternary 
price = isLeader === true ? 0 : price + 90;
console.log(price)

// Semi Advance Ternary 

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2
    }
    else {
        price = 0;
    }
}

else {
    price = price
}

// ternary
// price > 1000 ? price / 2 
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
console.log(price);




