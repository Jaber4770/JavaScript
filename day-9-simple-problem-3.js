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
    for (numb of array) {
        if (numb < minimum) {
            minimum = numb;
        }
    }
    return minimum;
}

const minimumbNumber = findTheMinimum(numbers);
console.log(minimumbNumber);


// shirt pant shoe price calculation:

function clothPriceCalculation(shirtQuantity, pantQuantity, shoeQuantity) {
    let shirtPrice = 500;
    let pantPrice = 800;
    let shoePrice = 900;

    let shirtTotalPrice = shirtPrice * shirtQuantity;
    let pantTotalPrice = pantPrice * pantQuantity;
    let shoeTotalPrice = shoePrice * shoeQuantity;

    let totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

let clothQuantity = clothPriceCalculation(2, 2, 1);
console.log("total money need: ", clothQuantity);



// find the expensive Phone:
let phones = [
    { name: "samsung", price: 50000, camera: "120MP", color: "black" },
    { name: "huawei", price: 20000, camera: "20MP", color: "black" },
    { name: "xomi", price: 40000, camera: "10MP", color: "black" },
    { name: "waltone", price: 10000, camera: "12MP", color: "black" },
    { name: "oppo", price: 23000, camera: "10MP", color: "black" },
    { name: "iphone", price: 150000, camera: "100MP", color: "black" }
];

function findTheExpensivePhone(phones) {
    let expensivePhone = phones[0];
    for (let phone of phones) {
        if (phone.price > expensivePhone.price) {
            expensivePhone = phone;
        }
    }
    return expensivePhone;
}

const expensivePhone = findTheExpensivePhone(phones);
console.log(expensivePhone);



// shopping cart:

let cart = [
    {name: "shampoo", price: 300, quantity: 3},
    {name: "oil", price: 400, quantity: 6},
    {name: "jainga", price: 500, quantity: 7},
    {name: "tshirt", price: 600, quantity: 4},
    {name: "shoe", price: 800, quantity: 1},
    {name: "pant", price: 700, quantity: 5},
    {name: "shirt", price: 900, quantity: 2}
];

function getShoppingTotal(cart){
    let total = 0;
    for(let item of cart){
        let singleItemTotal = item.price * item.quantity;
        total = total + singleItemTotal;
    }
    return total;
}

const total = getShoppingTotal(cart);
console.log("total shopping cost: ",total);


// simple discount:

function getDiscount(quantity){
    let first100 = 100;
    let second200 = 90;
    let thirdMore = 80;
    if(quantity <= 100){
        let totalPrice = first100 * quantity;
        return totalPrice;
    }
    else if(quantity <= 200){
        let toalPrice = second200 * quantity;
        return toalPrice;
    }
    else{
        let totalPrice = thirdMore * quantity;
        return totalPrice;
    }
}

let discountAmount = getDiscount(150);
console.log("You will get discount: ",discountAmount, "Taka");


// layer discount:
function getLayerDiscount(quantity){
    let first100 = 100;
    let second101To200 = 90;
    let third201ToMore =70;

    if(quantity <= 100){
        let totalPrice = first100 * quantity;
        return totalPrice;
    }
    else if(quantity <= 200){
        let remaining = quantity -100;
        let first100Price = first100 * 100;
        const remainingPrice = remaining * second101To200;
        const totalPrice = first100Price + remainingPrice;
        return totalPrice;
    }
    else{
        let remaining = quantity - 200;
        let first100Price = first100 * 100;
        let second101To200Price = second101To200 * 100;
        let remainingPrice = remaining * third201ToMore;

        const totalPrice = first100Price + second101To200Price + remainingPrice;
        return totalPrice;
    }
}

const layerDiscount = getLayerDiscount(250);
console.log(layerDiscount);










