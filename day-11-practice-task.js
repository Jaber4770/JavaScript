// js - problems - part1 - practice - tasks
/* Task - 1:
Write a function to convert temperature from Celsius to Fahrenheit. */

function CelsiusToFarenheit(temperature) {
    let Fahrenheit = (temperature * 9 / 5) + 32;
    return Fahrenheit;
}

console.log("Fahrenheit: ", CelsiusToFarenheit(12));


/*     Task - 2:
You are given an array of numbers.Count how many times the a number is repeated in the array.
    sample - input: numbers = [5, 6, 11, 12, 98, 5]
find: 5
output: 2 */
function findDuplicate(numberOfArray) {
    let repeatedArray = [];
    let newArray = [];
    for (let singleValue of numberOfArray) {
        if (newArray.includes(singleValue) === false) {
            newArray.push(singleValue);
        }
        else {
            repeatedArray.push(singleValue);
        }
    }
    return repeatedArray.length;
}

let numbers = [5, 6, 11, 12, 98, 5, 5, 10, 15]
console.log("Repeated time: ", findDuplicate(numbers));




/* sample - input:
numbers = [5, 6, 11, 12, 98, 5]
find: 25
output: 0 */

function finding25(array) {
    let filteredArray = [];
    for (let singleValue of array) {
        if (filteredArray.includes(singleValue) === 25) {
            filteredArray.push(singleValue);
        }
    }
    return filteredArray.length;
}

let numbersOfArray = [5, 6, 11, 12, 98, 5];
console.log("Finding 25: ", finding25(numbersOfArray));


/* Task - 3:
Write a function to count the number of vowels in a string. */

function coutingVowel(string) {
    let vowelArray = [];
    let singleString = string.split("");
    for (let singleValue of singleString) {
        if (vowelArray.includes(singleString) === false) {
            vowelArray.push(singleValue);
        }
    }
    return vowelArray.length;

}

let text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
console.log("number of Vowel is: ", coutingVowel(text));


/* Task - 4:
Write a function to find the longest word in a given string.
sample - input: I am learning Programming to become a programmer
sample - output: Programming */

function findingLargeWord(text) {
    let largeWord = '';
    let singleWordArray = text.split(' ');
    for (let singleValue of singleWordArray) {
        if (largeWord.length < singleValue.length){
            largeWord = singleValue;
        }
            
    }
    return largeWord;
}

let input = "I am learning Programming to become a programmer";
console.log("Largest word is: ", findingLargeWord(input));





/* Task-5:
Generate a random number between 10 to 20. */

function generateNumber() {

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.random() * 100;
        if (randomNumber >= 10 && randomNumber <= 20) {
            let integer = randomNumber.toFixed();
            return integer;
        }
    }
}

console.log("Number between 10 to 20 is: ", generateNumber());