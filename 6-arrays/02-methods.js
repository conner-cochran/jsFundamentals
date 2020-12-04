/*
    ARRAY METHODS
        - array methods are methods or functions that are built into JS, that can be used to make our lives as developers easier
*/

let food= ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

//array.push()- allows us to push one or more elements to the end of our original array. Push method will always add the new elements to the END of the array
food.push('Pizza');
console.log(food);

//array.splice()- the splice method allows us to add and remove elements from an array
food.splice(1, 1, 'Bananas');
console.log(food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);

//array.pop()- the pop method removes the last item from an array
food.pop();
console.log(food);

//array.shift()- the shift method removes the first item in an array
food.shift();
console.log(food);

//array.unshift()- the unshift method adds one or more elements to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log(food);