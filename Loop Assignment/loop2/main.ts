//2. Guessing Game (Using while loop ) 
// Objective: Create a simple number guessing game where the user tries to guess a randomly  generated number between 1 and a specified maximum value using a predefined set of guesses. 
// Steps to Follow: 
// 1. node main.js: Create a variable to store the maximum value for the number  guessing game. 
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a  random number between 1 and the maximum value. Log this value to the console for  development purposes. 
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set  it to false initially. 
// 4. Simulate user guesses: Use an array to store a series of predefined guesses. 
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the  correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random  number. Provide feedback if the guess is too high or too low. 


//*****************************Solution ******************************

// // --------------------------------Create a variable to store the maximum value----------
// let maxValue = 10;

// //--------------------------------------------Generate a random number--------------
// let rndNum = Math.floor(Math.random()*10+1);
// console.log(`Random number is: ${rndNum}`);

// //-------------------------------------------Track the guess status------------------
// let isCorrect = false //rndNum===maxValue? false : true;

// //-------------------------------------------predefined guesses-----------------------
// let storedGuesses = [3, 5,7,9];

// //--------------------------------------------Iterate over guesses---------------------
// let x = 0;
// while (x <storedGuesses.length && !isCorrect) {

// //-----------------------------------------------Check the user's guess-----------------
    
//     if (storedGuesses[x] === rndNum) {
//         console.log(`Well Done! You guess ${storedGuesses[x]} is correct.`)
//     }
//     else if (storedGuesses[x] > rndNum){
//         console.log(`${storedGuesses[x]}, your guessed number is high, try again.`);
//     }
//     else {
//         console.log(`${storedGuesses[x]} is too low, try again.`)
//     }
// x++;
// };