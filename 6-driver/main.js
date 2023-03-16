const hasLicence = true;
const age = 18;
const isDrink = true;
const checkDrive = (hasLicence, age, isDrink) => hasLicence && age >= 18 && !isDrink
    ? console.log('Может')
    : console.log('Не может');

checkDrive(hasLicence, age, isDrink);