// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
   
 
console.log(returnFirstTwoDrivers(drivers))
console.log(returnLastTwoDrivers(drivers))

console.log(selectingDrivers)

const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = returnFirstTwoDrivers(driversArray);
console.log(lastTwoDrivers);


const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};
console.log(createFareMultiplier(40))
const fareQuadruple = createFareMultiplier(4);
console.log(fareQuadruple(40)); 

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(40)); 

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(40)); 

const selectDifferentDrivers = function(drivers, selectDriver) {
    return selectDriver(drivers);
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));