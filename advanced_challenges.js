/*
ADVANCED JAVASCRIPT CHALLENGES
*/
// ----------------------- Q1 -------------------------
/*
Show Rating
description: Given a rating, display a star "*" for each
full rating and a full-stop "." for each half rating
*/
/*
function showRating(rating) {
    let ratings = ""
    for(i=0; i<Math.floor(rating); ++i) {
        ratings += "* "
    }
    if(rating != Number.isInteger(rating)) {
        ratings += "."
    }
    return ratings
}
console.log(showRating(.5))
*/

// ----------------------- Q2 ------------------------- ***STAR***
/*
Sort by lowest to highest price
description: Given an array of numbers, 
return the prices sorted by low to high
*/
/*
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => {
        return a - b
    }); //the .sort() function
    //sorts alphabetically, in order to sort numerically then you
    // use the (a, b) => a - b. High to low is b - a. 
}
console.log(sortLowToHigh([20,40,10,30,50,10]))
*/

// ----------------------- Q3 -------------------------
/*
Sort by highest to lowest price
description: Given an array of objects, 
return the prices sorted by high to low
*/
/*
function sortHighToLow(array) {
    return array.sort((a, b) => b.price - a.price);
}
console.log(
    sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
    ])
);
*/

// ----------------------- Q4 -------------------------
/*
Study and understand Async / Await
*/

// ----------------------- Q5 ------------------------- ***STAR***
/*
Find all the posts by a single user
description: call this API "https://jsonplaceholder.typicode.com/posts"
and return all the posts by any given user id
*/
/*
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json();

    const posts = result.filter((element) => element.userId === userId);

    console.log(posts);
}
postsByUser(4);
*/

// ----------------------- Q6 -------------------------
/*
First 6 Incomplete Todos
description: Call this API "https://jsonplaceholder.typicode.com/todos"
and return the first 6 incomplete todo's from the result
*/
/*
async function firstSixIncomplete(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const todos = result.filter((elem) => !elem.completed).slice(0, 6);

  console.log(todos);
}
firstSixIncomplete(6);
*/
