// 3. Counter Incrementer (Using do while loop ) 
// Objective: Create a program that increments a counter by a specified step value using a  do...while loop and prints the counter value to the console until it reaches or exceeds 100. 
// Steps to Follow: 
// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold  the value by which the counter will be incremented. 
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by  the step amount each iteration. 
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run  as long as the counter is less than 100. 

//*********************************Solution****************************************** 

//-----------------------------------------Set the starting counter to 0------------
// let  counter = 0;

// //-------------------------Create a variable,step,to increase counter by---------------
// let step = 5;

// // ---------Add a do...while loop to increment the counter until it reaches 100--------
// do {
//   console.log("Counter: " + counter);
//   counter += step;
// } while (counter <= 100);

//xxxxxxxxxxxxxxxxxxxxx__________________xxxxxxxxxxxx_____________xxxxxxxxxxxxxxxxxxxx

                                    //Quetion #4

// 4.Exploring Objects with for...in Loop 
// Objective: Practice working with objects in TypeScript and iterating over their properties using  a for...in loop. 
// Instructions: 
// 1. Create a simple object with three items: 
// o Define an object called myObject with three properties: item1, item2, and item3,  each with corresponding string values. 
// 2. Use a for...in loop to get properties' names and values from the object: 
  //o Iterate through the properties of myObject using a for...in loop. 
// o Inside the loop, print each property's name and its corresponding value to the  console.


//**************************************/ Solution***************************************

//---------------------------Create a simple object with three items-------------------
// let myObject={
//   itemNo1: "mobile",
//   itemNo2: "keys",
//   itemNo3:  "bag",
// };
  
// //-----------------Use a for...in loop to iterate through the properties---------------
//   for (let property in myObject) {
//     console.log(`Property: ${property}, Value: ${myObject[property as keyof typeof myObject]}`);
//   };