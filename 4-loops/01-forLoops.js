/*
    - Loops offer us a quick and easy way to do something repeatedly, or loop over something
    - there are many different kinds of loops, but they all do roughly the same thing:
        - the loop will repeat until a specified condition evaluates to false

        - forLoop
        - doWhileLoop
        - whileLoop
        - forIn
        - forOf

        - for loop takes in 3 parameters:
            1. initial expression
            2. condition
            3. increment expression

            ** separated by semicolon;
*/

//  1.        2.     4.
for(let i= 0; i< 10; i++){//i= i+ 1 or 1+= 1
  //3.
    console.log(i);
}
/*
    1. set variable
    2. condition to be met. The loop will continue to run until this condition evaluates as false
    3. body of the for loop: code to be ran as long as condition evaluates as true
    4. incrementor: the number in which we want to increase the value of our variable by

    - these steps will continue to repeat until the condition evaluates as false
*/

//Challenge: using a for loop, count to 20, by 2
for(let x= 2; x<= 20; x+= 2){
    console.log(x);
}

//Challenge: using a for loop, count from 10 to 0, going by 1
for(let y= 10; y>= 0; y--){//y= y- 1 or y-= 1
    console.log(y);
}

//Challenge: using a for loop, count from 0, going down by 2, to -24
for(let z= 0; z>= -24; z-= 2){
    console.log(z);
}

//Challenge: using a for loop, go through a name and display each letter individually
let name= 'Spongebob';

/* for(let num= 0; num< name.length; num++){
    console.log(name[num])
    }*/

for(let i= 0; i< name.length; i++){
    console.log(name.charAt(i));
}

//Challenge: write a for loop that adds up all numbers from 1-50 (should equal 1275)
let sum= 0;

for(let h=1; h<= 50; h++){
    sum+= h;
    console.log(sum)
}