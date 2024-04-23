console.log("HI");
let bill=200;
const tip1=bill * 1.15;
const tip2=bill * 1.20;

// let t=toFixed(tip1);
// console.log(t);

let totalBill = (bill > 50 && bill < 300) ?
console.log(`The bill was ${bill}, the tip was ${tip1-bill} and the total value ${tip1}`):
console.log(`The bill was ${bill}, the tip was ${tip1-bill} and the total value ${tip2}`);