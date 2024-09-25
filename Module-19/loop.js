// for in loop use kore objcet ke loop kora jai 

const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}


for (let prop in mobile) {
    console.log(prop);
    console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
    // console.log(key);
    console.log(key, mobile[key])
}