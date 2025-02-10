/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
for (let i = 1; i <= 200; i++) {
    if (i === 100) {
        break;
    }
    // console.log("The number is: ", i);
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let i = 1;
let adds = 0;
while (i >= 0) {
    adds += i;
    // console.log("sum of adds", adds);
    if (i >= 100) {
        break;
    }
    i++;
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for (let i = 1; i <= 100; i++) {
    if (i > 1 && Math.sqrt(i) % 1 === 0) {
        break;
    }
    console.log("The number is: ", i);
}



/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log("this is a even number: ", i);
    }
    continue;
}


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log("the number is not devided by 5: ", i);
}

/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/
for (let i = 1; i <= 60; i++) {
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!");
    if (i >= 60) {
        break;
    }

}


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
for (let i = 61; i <= 100; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log("Odd number: ", i);
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("even number: ", i);
}

/*programming hero*/



/*  

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

*/
let sum = 0;
for (let i = 91; i <= 129; i++) {
    sum += i;
}
console.log("Sum: ", sum);

/* 
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let evenSum = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log("evenSum: ", evenSum);
/*programming hero*/

/***
Generate a multiplication table for number 9
 */
for (let i = 1; i <= 10; i++) {
    console.log(i * 9);
}


/***
Implement a countdown timer that counts down from 81 to 65.
 */
for (let i = 81; i >= 65; i--) {
    console.log("countdown: ", i);
}



/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
let num = 1;
while (num <= 60) {
    console.log(num, "I will invest at least 6 hrs every single day for next 60 days!");
    num++
}


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let oddNumFinder = 61;
while (oddNumFinder <= 100) {
    if (oddNumFinder % 2 !== 0) {
        console.log("odd number: ", oddNumFinder);
    }
    oddNumFinder++
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
let evenNums = 78;
while (evenNums <= 98) {
    if (evenNums % 2 === 0) {
        console.log("even numbers: ", evenNums);
    }
    evenNums++
}
/*programming hero*/


/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let oddSum = 0;
let oddNumbs = 81;
while (oddNumbs <= 131) {
    if (oddNumbs % 2 !== 0) {
        oddSum += oddNumbs;
    }
    oddNumbs++;
}
console.log("oddSum:--------- ", oddSum);


/***

Implement a countdown timer that counts down from 21 to 15.

 */
let counts = 21;
while(counts >= 15){
    console.log(counts);
    counts--;
}











