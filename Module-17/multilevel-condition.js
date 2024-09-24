/* ****
** Multilevel Condition 
***** */


/* const price = 4500;

if (price >= 5000) {
    // 10% Discount 
    const disCountpercent = price * 10 / 100;
    const payAmount = price - disCountpercent;
    console.log(payAmount)
}
else if (price >= 4000) {
    // 5% Discount
    const disCountpercent = price * 5 / 100;
    const payAmount = price - disCountpercent;
    console.log(payAmount)
}
else {
    console.log(price);
} */

const age = 30;
const price = 500;

if (age <= 12) {
    console.log('You can get eat for free');

}
else if (age >= 50) {
    // 50% Discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 60) {
    // 60% Dsiscount
    const discount = price * 60 / 100
    const payAmount = price - discount
    console.log(payAmount)
}

else {
    console.log(price)
}