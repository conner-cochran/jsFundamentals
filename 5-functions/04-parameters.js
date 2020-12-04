/*
    PARAMETERS
        - parameters are placeholders for data that we pass into the function when the function is called

                       (1)
        function hello(name){
            console.log(`hello ${name}`);
                                 (2)
        }
                (3)
        hello('Conner');

        1. this is the parameter that the function is holding. This is just a placeholder
        2. by calling the parameter name, it will print the value given to 'name' when the function was called
        3. this is the data that we're passing into the function, and that the parameter 'name' will then hold

        - parameters can be named anything, just like variables
*/
//         let name= 'Conner'
function hello(name){
    console.log(`hello ${name}`);
}

hello('Conner'); //when we call the function, it is where we need to pass in the data that we want to assign to the parameter

//------------------------------------------------------------------------------------------------------------------------
//              ticket = 'cheese pizza'
function conner(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`);
}

conner('cheese pizza'); //if you have no parameter (or placeholder), then your function will not be able to accept any data 

//------------------------------------------------------------------------------------------------------------------------

function counter(number){
    console.log(number);
}

for(let i= 0; i<= 10; i++){
    counter(i);
}

//Challenge: write a function that holds 2 parameters. One parameter is for a first name, the other is got a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name.

function fullName(first, last){
    console.log(first, last);
}

fullName('Conner', 'Cochran');