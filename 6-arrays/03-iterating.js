let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

//regular for loop
for(let i= 0; i< food.length; i++){
    console.log(food[i]);
}

//forEach() method
food.forEach(function(foodItem){
    console.log(foodItem);
})

//forEach() method- fat arrow function
food.forEach(foodItem=> console.log(foodItem));

//------------------------------------------------------------------------------------------------------------------------

let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

for(let i= 0; i< food.length; i++){
    listMyFood(food[i])
}

function listMyFood(){
    console.log(foodItem);
}

//Look at MDN docs for the forEach() method
//Challenge: in the forEach() method, include the optional index parameter, and print that index to the console

let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

//concise body arrow function
food.forEach((foodItem, index)=> console.log(foodItem, index));

//block body arrow function
food.forEach((foodItem, index)=>{
    console.log(foodItem, index);
})

//function declaration
food.forEach(function(foodItem, index){
     console.log(foodItem, index);
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach((movieTitle)=> console.log(movieTitle));

movies.push('Star Wars Holiday Special');
console.log(movies);

movies.splice(4, 1, 'Force Awakens');
console.log(movies);