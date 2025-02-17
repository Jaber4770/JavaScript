// Simple function Related Practice Tasks

/* Task-1
Take four parameters. Multiply the four numbers and then return the result
 */
function multiply4Numbers(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;

}
console.log(multiply4Numbers(2, 3, 4, 5));

/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */
function multiDevide(number) {
    if (number % 2 === 0) {
        return number / 2;
    }
    else {
        return number * 2;
    }
}

console.log(multiDevide(6));




/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(array) {
    let sum = 0;
    for (let singleValue of array) {
        sum += singleValue;
    }
    return sum / array.length;

}

let avrageArray = [2, 3, 4, 5, 6, 67, 7, 8, 9, 7, 6, 5, 43, 32];
console.log("Avarage of the array is: ", make_avg(avrageArray));

/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */
function count_zero(string){
    let devideArray = string.split("");
    let count = 0;
    for(let singleValue of devideArray){
        if(singleValue !== "1"){
            count++;
        }
    }
    return count;
}

let binaryString = "1010101000110101010001111000101010101010";
console.log("Number of 0 in the string is: ", count_zero(binaryString));



/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

 */

function odd_even(number){
    if(number % 2 === 0){
        return "Even";
    }
    return "Odd"
}

console.log(odd_even(5));








