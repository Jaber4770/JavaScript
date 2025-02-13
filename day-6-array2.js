// js-array-tasks
/* 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */

let fruits = ["mango", "banana", "jackfruits", "painapple", "lichi"];
console.log(fruits[2]);
console.log(fruits);
fruits[2] = "jambura";
console.log(fruits);


/* 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

let places = ["sajek", "bandarban", "sondarban"];
console.log("Places: ", places);
places.push("kataban", "jhawban");
console.log(places);
places.pop();
console.log(places);


/* 3. Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.  */

let books = ["math", "physics", "chemistry", "biology"];
let js = books.includes("javascript");
console.log("JavaScript book is available: ", js);
books.push("javascript");
let jsbook = books.includes("javascript");
console.log("JavaScript book is available: ", jsbook);


/* 4. Checking if it's an Array
Instructions:
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
 */

let array = ["potato", "avocado", "banana", "lichi"];
let arrayCheck = Array.isArray(array);
console.log("This is an array: ", arrayCheck);



/* 5. Combining Arrays
Instructions:
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */


let food = ["fruits", "vagatable", "spinich"];
let other = ["fruits2", "vagatable2", "spinich2"];
let newArray = food.concat(other);
console.log(newArray);










