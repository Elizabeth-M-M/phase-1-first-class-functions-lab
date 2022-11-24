// DRIVERS FUNCTION
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


// function returnFirstTwoDrivers()
function returnFirstTwoDrivers(arr) {
    const firstTwo = [...arr].slice(0, 2);
    return firstTwo;
}


// function returnLastTwoDrivers()
function returnLastTwoDrivers(arr) {
    const lastTwo = [...arr].slice(-2);
    return lastTwo;
}
// selectingDrivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers);

console.log(drivers);

// FARE FUNCTION

// function createFareMultiplier()

function createFareMultiplier(multiplier) {
    return function (fare) {
       return fare*multiplier
    }
}
 const fareMultiplier = createFareMultiplier(2)
const fareQuintupler = createFareMultiplier(5);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

console.log(fareMultiplier(5));
console.log(fareQuintupler(5));
console.log(fareDoubler(10))
console.log(fareTripler(12))

// select different drivers
function generateRandomDriver(arr) {
    let random = Math.floor(Math.random() * selectingDrivers.length)
     if (random === 0) {
         return returnFirstTwoDrivers(arr);
    } else {
         return returnLastTwoDrivers(arr);
    }
}

const selectDifferentDrivers = (cb, cb1) => {
    return cb1(cb);
    
}
console.log(selectDifferentDrivers(drivers, generateRandomDriver))

