/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600 ;

if(burgerPrice > 500){
    console.log("Get Free Coke");
}
else{
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

if( bmi < 18.5){
    console.log("you are underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("you are normal");
}
else if( bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese!");
}