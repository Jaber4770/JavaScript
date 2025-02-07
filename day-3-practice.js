// js-array-tasks
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let friendsAge = ["amm", "jam", "kola", "lichu"];
console.log(friendsAge[2]);
friendsAge[2] = "jambura";
console.log(friendsAge);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let places = ["sajek", "coxbazar", "sondarban"];
places.push("kataban");
console.log(places);
places.push("shalban", "bandarban");
console.log(places);
places.pop()
console.log(places);



// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

let books = ["bangla", "english", "math", "physics"];
console.log("does chemistry inclued at the list: ", books.includes("chemistry"));


// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

let number = 5;
let numbers = [12, 34, 45, 23, 35, 4, 65, 65, 46, 90];
console.log("This is an Array: ", Array.isArray(numbers));
console.log("This is an Array: ", Array.isArray(number));


// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let arry1 = [23,34,435,90];
let arry2 = [333,444,555,666];
let finalArry = arry1.concat(arry2);

console.log(arry1);
console.log(arry2);
console.log(finalArry);