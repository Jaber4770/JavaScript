// array-looping-tasks

/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors.reverse());



/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46] */

const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for (number of numbers) {
    if (number % 2 === 0) {
        even.push(number);
    }
}
console.log(even);


/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik' */
const TomText = ['Tom', 'Tim', 'Tin', 'Tik'];

let tomtik = TomText.join("")
console.log(tomtik);


/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I' */

let theSentence = "I am a hard working person";
let arraySentence = theSentence.split(" ");
let reverseSentence = arraySentence.reverse();
console.log(reverseSentence.join(" "));










