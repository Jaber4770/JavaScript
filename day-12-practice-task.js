// js-problems-part2-practice-tasks

/* Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]; */

function lowestFinder(array) {
    let firstValue = array[0];
    let lowest = 0;
    for (let singleValue of array) {
        if (firstValue > singleValue) {
            lowest = singleValue;
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137];
console.log("Lowest value is: ", lowestFinder(heights2));



/* Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */



function findSmallestName(names) {
    let smallName = names[0];
    for (let singleName of names) {
        if (smallName.length > singleName.length) {
            smallName = singleName;
        }
    };

    return smallName;
}
const lowests = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log("got samllest name: ", findSmallestName(lowests));


/* Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */

function budgetCalculator(laptopQuantity, tabletQuantity, mobileQuantity) {
    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;

    let totalLaptopBudget = laptopQuantity * laptop;
    let totalTabletBudget = tabletQuantity * tablet;
    let totalMobileBudget = mobileQuantity * mobile;

    let totalBudget = totalLaptopBudget + totalMobileBudget + totalTabletBudget;

    return totalBudget;

}

console.log("total money need: ", budgetCalculator(1, 2, 3));


/* Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ]; */

function findAvaragePhonePrice(phones) {
    let totalPhonePrice = 0;
    for (let phone of phones) {
        totalPhonePrice += phone.price;
    }

    return totalPhonePrice / phones.length;

}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
console.log("the avarage price of these Phone is: ", findAvaragePhonePrice(phones));


/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; */

function totalSalary(employees) {
    let currentSalary = 0;
    for (let employee of employees) {
        
        let startingSalary = employee.starting;
        let experience = employee.experience;
        let increment = employee.increment;

        let incrementSalary = increment * experience;
        let employeeCurrentSalary = startingSalary + incrementSalary;
        currentSalary += employeeCurrentSalary;
    }
    return currentSalary;
}


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
console.log("total salary of all employee: ", totalSalary(employees));
