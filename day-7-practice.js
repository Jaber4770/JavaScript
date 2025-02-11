/* Task-1:
Count how many times a string has the letter a
 */
let finding_a = "Count how many times A string has the letter a";
let finding_aArray = finding_a.split(" ");

let got_a = 0;
for (let words of finding_aArray) {
    if (words.startsWith("a")) {
        got_a += 1;
    }
}
console.log("the number of a is: ", got_a);

/* Task-2:
Count how many times a string has the letter a or A
 */
let got_A = 0;
for (let words of finding_aArray) {
    if (words.startsWith("a") || words.startsWith("A")) {
        got_A += 1;
    }
}
console.log("the letter starting with a or A is: ", got_A);


/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */

let theTextContainVowels = "A quick brown fox jumps over the lazy dog.";
let vowels = ["a", "e", "i", "o", "u"];
for (let vowel of vowels) {
    if (theTextContainVowels.toLocaleLowerCase().includes(vowel)) {
        console.log("It contain vowel.");
    }
    else {
        console.log("there is no vowel.");
    }
}


/* Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */
let mainText = "If a given string has either x, replace x by y. if the given string has X, replace it by Y.";


if (mainText.includes("x") || mainText.includes("X")) {

    let newReplacedText = mainText.replace(/x/g, "y").replace(/X/g, "Y");
    console.log(newReplacedText);
} else {
    console.log("No 'x' or 'X' found in the text.");
}



/* Task-5:
Capitalize Every first Letter of each word in a String */

let capitalizeText = "capitalize Every first Letter of each word in a String";

let words = capitalizeText.split(" ");
let capitalTextArray = [];
let theText = "";
for (let word of words) {
    let firstLetter = word.charAt(0).toUpperCase();
    let restWord = word.slice(1);
    capitalTextArray.push(firstLetter + restWord);
    theText = capitalTextArray.join(" ");
}
console.log(theText);

