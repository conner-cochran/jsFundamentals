/*
    PROPERTIES AND METHODS
        - In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with. Using a method causes something to happen to the data, while using a property returns information about the data.
        - .property and .method()
            - methods have parens behind them, properties do not
*/

//STRING PROPERTIES

//Length
let my_name= 'Conner';
console.log(my_name.length);

//STRING PROPERTIES

let my_dogs_name= 'Bailey';
console.log(my_dogs_name.toUpperCase()); //change a string to uppercase

let home= 'My home is Pendleton';
console.log(home.includes('Pendleton'));

//challenge: use google, find MDN documentation for string methods. Research the string '.split()' method, and use and implement it to get an array back from a string.

let sent= 'This sentence will be split into individual parts';
console.log(sent.split('')); //splits at each indiviudal character
console.log(sent.split(' ')); //splits at each space in the original string
console.log(sent.split(',')); //splits at the coma(if there was one)