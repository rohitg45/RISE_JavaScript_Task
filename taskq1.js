let mark_mass1=78;
let mark_mass2=95;
let john_mass1=92;
let john_mass2=85;

let mark_height1=1.69;
let mark_height2=1.88;
let john_height1=1.95;
let john_height2=1.76;

let calc_BMI= function(mass, height)
{
    let BMI = mass/height**2;
    return BMI.toFixed(2);
}

let mark_bmi1= calc_BMI(mark_mass1,mark_height1);
console.log("Mark's BMI Index is "+mark_bmi1);

let john_bmi1= calc_BMI(john_mass1,john_height1);
console.log("John's BMI Index is "+john_bmi1);

var com1= Boolean(mark_bmi1>john_bmi1);
console.log(com1);

let mark_bmi2= calc_BMI(mark_mass2,mark_height2);
console.log("Mark's BMI Index is "+mark_bmi2);

let john_bmi2= calc_BMI(john_mass2,john_height2);
console.log("John's BMI Index is "+john_bmi2);

var com2= Boolean(mark_bmi2>john_bmi2);
console.log(com2);

if(com1){
    console.log(`Mark's BMI (${mark_bmi1}) is higher than John's (${john_bmi1})`);
}
else
{
    console.log(`John's (${john_bmi1}) BMI is higher than Mark's (${mark_bmi1})`);
}

if(com2){
    console.log(`Mark's BMI (${mark_bmi2}) is higher than John's (${john_bmi2})`);
}
else
{
    console.log(`John's (${john_bmi2}) BMI is higher than Mark's (${mark_bmi2})`);
}