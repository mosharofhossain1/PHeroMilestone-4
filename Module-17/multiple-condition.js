const salary = 26000;
const isBCS = true;
const height = 61
const hasCar = false;

if (salary > 25000 && isBCS) {
    console.log('Cele Beyare upjukgo')
}

else {
    console.log('tumi akono boro hoyco na')
}

// =======================
if (salary > 26000 || height > 56) {
    console.log('tumi beya korte parba')
}
else {
    console.log('tumi akon beya kortye parba na ')
}


/* ================ */
if (salary > 27000 && height > 45 && isBCS == true) {
    console.log('kobe beya korba')
}
else {
    console.log('tumake aro valo bave porashuna korte hobe')
}



/* ******Complex Condition ******* */

if ((salary > 27000 && hasCar == true) || isBCS == true) {
    console.log('Cele t kub valo tahole beya kore pelo')
}
else {
    console.log('tumi aro kciudin pore beya koro kemon')
}
