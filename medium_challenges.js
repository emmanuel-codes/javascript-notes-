// ******************************Q1******************************
// Given two values, return the first one if it is falsy, 
//  otherwise return the second one

/*
function truthyOrFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}
console.log(truthyOrFalsy(0,5))
*/

// ******************************Q2******************************
// Return the length of any given array
// arrLength([1,2,3]) --> 3

/*
function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1,2,3]))
*/

//Q
// Given an array, return the first element

/*
function firstElem(array) {
    return array[0]
}
console.log(firstElem([3, 2, 0, 6, 2]))
console.log(firstElem(['dog', 'cat', 'ball']))
*/

// ******************************Q3******************************
// Get the last element of an array
/*
function lastElem(array){
    return array[array.length - 1]
}
console.log(lastElem([3,2,0,6,2]))
console.log(lastElem(['dog', 'cat', 'ball']))
*/

// ******************************Q4******************************
// Find the sum of an array
/*
function arraySum(array) {
    let sum = 0;
    for (i=0; i<array.length; ++i) {
        sum = sum + array[i];
    }
    return sum
}
console.log(arraySum([7,4,3]))
*/

// ******************************Q5******************************
// Add up the numbers from a single number
/* 
description: given a number, 
add up all the numbers from one to the number that is given. 
Ex/ an input of 4 will give you 1 + 2 + 3 + 4, which equals 10


function progressiveSum(num) {
    let factorial = 0;
    for (i=0; i<=num; ++i) {
        factorial = factorial + i; // 0+1+2+3+4
    }
    return factorial
}

console.log(progressiveSum(4))
*/

// ******************************Q6******************************
/*
Calculate the time

description: given a number in seconds, 
return this number in mm:ss format

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    timerSeconds = seconds % 60;

    if(timerMinutes.toString().length === 1) {
        timerMinutes='0' + timerMinutes;
    }
    if(timerSeconds.toString().length === 1) {
        timerSeconds='0' + timerSeconds;
    }

    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(76))
*/

// REALLY GOOD QUESTION ******************************Q7******************************
/*
Find the largest number 
description: given an array of numbers, 
return the largest number of that array

function getMax(array) {
    let max = array[0];
    for (i=0; i<array.length; ++i){
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(getMax([5, 100, 0]))
*/

// ******************************Q8******************************
/*
Reverse a String 
description: given a string, return the reversed string 
note: you can use either an incremeneting loop, 
decrementing loop, or the array reverse property to solve this
*/
/*
function reverseString(string) {
    let reversedString=''
    for(let i=0; i<string.length; ++i) {
        reversedString = string[i] + reversedString;
        
        //here is what is happening
        first iteration: since reversedString is empty, ' ' = a + ' ' ==> 'a'
        second iteration: 'a' = b + 'a' ==> 'ba'
        //third iteration: 'ba' = c + 'ba' ==> 'cba'
        
    }
    return reversedString;
} 
//console.log(reverseString('abc')); 
*/
//using the reverse property
/*
in order to convert a string to an array, you use the split keyword in java script
*/

// ******************************Q9******************************
/* 
Turn every element in an array into 0
*/
/* using for loop

function convertToZeros(array) { 
    let newArray=[]
    for (i=0; i<array.length; ++i) {
        newArray[i] = 0
    }
    return newArray
}
console.log(convertToZeros([1,2,3,4,5,6]))

*/

/* using array.fill

function convertToZeros(array) { 
    return new Array(array.length).fill(0)
}
console.log(convertToZeros([1,2,3]))

*/

/* using array.map

function convertToZeros(array) {
    return array.map(elem => {
        return 0
        });
}
console.log(convertToZeros([1,2,3,4,5]))

*/

// ******************************Q10******************************
/*
Filter out all the apples
desciption: Given an array of fruits, if it is an apple, remove it from the array
*/

/* USING THE IF STATEMENT

function removesApples(array) {
for(i=0; i<array.length; ++i){
    if(array[i] !== 'Apple') {
        console.log(array[i])
    }
    return array
}
}

console.log(removesApples['Banana', 'Apple', 'Orange', 'Apple'])

*/

/* USING THE PUSH METHOD
function removesApples(array) {
    let noApples =[]
    for(i=0; i<array.length; ++i){
        if(array[i] !== 'Apple') {
            noApples.push(array[i])
        }
    }
    return noApples;
}
console.log(removesApples(['Banana', 'Orange', 'Apple']))

*/

/* USING THE array.filter() METHOD
function removesApples(array) {
    return array.filter(element => element !== 'Apple')
}
console.log(removesApples(['Banana', 'Apple', 'Orange', 'Apple']))

*/

// ******************************Q11******************************

/* USING array.filter

function filterOutFalsy(array) {
    return array.filter(elem => !!elem == true)
}
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple', 'Apple', [], 0]))

*/

/* USING FOR LOOP AND PUSH METHOD
function filterOutFalsy(array) {
    let truthyArray =[]
    for (i=0; i< array.length; ++i) {
        if(!!array[i] == true) {
            truthyArray.push(array[i])
        }
    }
    return truthyArray
}
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple', 'Apple', [], 0]))

*/

// ******************************Q12******************************

/* 
Truthy to True, Falsy to False
description: Given an array of truthy and falsy values, 
return the same array of elements into its boolean value
*/

/* USING THE PUSH METHOD
function convertToBoolean(array) {
    let arrayBoolean =[]
    for(i=0;i<array.length; ++i) {
            arrayBoolean.push(!!array[i])
        }
    
    return arrayBoolean
}

console.log(convertToBoolean([500, 0, 'David', "", []]))

*/

/* USING MAP METHOD 

function convertToBoolean(array) {
    return array.map(elem => !!elem) // write !!elem instead of !!array because arrays are truthy
}

console.log(convertToBoolean([500, 0, 'David', "", []]))

*/


