// Inch to feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const inchToFeetResult = inchToFeet(36);
console.log("Feet: ", inchToFeetResult);


// Milest to KM

function mileToKm(mile) {
    const km = mile * 1.60934;
    return km;
}
console.log("Km: ", mileToKm(10));



// km to miles

function kmToMiles(km) {
    const miles = km * 0.621371;
    return miles;
}

console.log("Miles: ", kmToMiles(20));

// leap year

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return ("This is a Leap Year");
    }
    return "This is not a leap year";
}

console.log(leapYear(2020));


// array sum > avarage
function oddAvarage(array) {
    let OddSum = 0;
    let oddArray = [];
    let OddSumAvg = 0;
    for (let element of array) {
        if (element % 2 !== 0) {
            oddArray.push(element);
        }
    }
    for (let item of oddArray) {
        OddSum = OddSum + item;
        OddSumAvg = OddSum / oddArray.length;
    }
    console.log(oddArray)
    return OddSumAvg;
}

let numberOfArrya = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1001];
const oddAvage = oddAvarage(numberOfArrya);
console.log(oddAvage);


// Find the minimum number of an array.

let numbers = [13, 24, 53, 64, 75, 86, 97, 87, 56, 36, 33, 24, 33, 1];

function findTheMinimum(array) {
    let minimum = array[0];
    for( numb of array){
        if(numb < minimum){
            minimum = numb;
        }
    }
    return minimum;
}

const minimumbNumber = findTheMinimum(numbers);
console.log(minimumbNumber);






