/*
    RETURN
        - the return keyword allows us to return a variable or value that is local to the scope of a function, and access that variable or value within the global scope of the document
*/

//function declaration
function myName(fName){
    //console.log(fName);
    
    //return fName; parens can or can't included, and it will still return the value
    return(fName);
}

//myName('Conner');
//when we return a value from a function, we need to assign the call of our function to a variable to capture the return value from the function

let myNameIs= myName('Conner'); //when this line of code is read, the function will run before anything else. Since we're returning a value from that function, our return value is the value that will be assigned to our variable of myNameIs
console.log(myNameIs);

//another example
let nickname= 'Beans';

function myName(fName){
    //console.log('console.log from function', fName);

    let myVar= `${fName}, ${fName} the magical fruit`;

    return myVar;
}

let captureReturn= myName(nickname);
console.log(captureReturn);

//BLOCK BODY ARROW FUNCTION
let myName= fName=>{
    return fName
}

let myNameIs= myName('Spongebob');
console.log(myNameIs);

//CONCISE BODY ARROW FUNCTION
let name= (lName)=> lName;

let captureReturn= name('Squarepants');
console.log(captureReturn);