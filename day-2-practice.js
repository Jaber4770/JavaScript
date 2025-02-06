/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;

if (burgerPrice > 500) {
    console.log("Get Free Coke");
}
else {
    console.log("Pay 30TK for coke");
}


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let yourWeight = 81; // kg
let yourHeight = 66; // height in inch
// Convert height from inches to meters
let heightInMeters = yourHeight * 0.0254;

// Correct BMI calculation
let bmi = yourWeight / (heightInMeters ** 2);

console.log("Your BMI score is:", bmi.toFixed(2)); // Display with 2 decimal places

if (bmi < 18.5) {
    console.log("you are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight");
}
else {
    console.log("You are obese!");
}

/***
Grade Calculator----------------------
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let studentScore = 37;

if (studentScore >= 90 && studentScore <= 100) {
    console.log("Student Grade is A+");
}
else if (studentScore >= 80 && studentScore <= 89) {
    console.log("student grade is B");
}
else if (studentScore >= 70 && studentScore <= 79) {
    console.log("student grade is C");
}
else if (studentScore >= 60 && studentScore <= 69) {
    console.log("student grade is D");
}
else if (studentScore >= 0 && studentScore <= 59){
    console.log("student grade is F");
}


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 80;
const frndScore = 50.2;

if(frndScore > 80){
    console.log("Let's go for a lunch");
}
else if(frndScore < 80 && frndScore >= 60){
    console.log("Good luck next time");
}
else if(frndScore < 60 && frndScore >= 40){
    console.log("Do not seen his/her message");
}
else if( frndScore < 40){
    console.log("block your frnd");
}



/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 

also, write it using ternary operator.
 */

let num1 = 4;
let num2 = 30;

let result =0;

num1 > num2 ? result = num1 *2 : result = num1 + num2;




// if(num1 > num2){
//     result = num1 * 2;
// }
// else{
//     result = num1 + num2;
// }
console.log(result);





/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800;
let age = 20;
let student = true;

if( age < 10){
    console.log("free ride");
}
else if( student && age <= 18){
    fare = fare * 50 /100;
}
else if( age >= 60){
    fare = fare * 15/100;
}
else{
    console.log("Regular ticket fare 800tk");
}

console.log(fare);






