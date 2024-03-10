//Function In Block JS 
// {
//     function fun(){
//         return "123";

//     }

// }
// console.log(fun);

//Function In Block Strict mode  JS 
"use strict";
{
    function fun() {
        return "123";

    }

}
console.log(fun);



/*

The function `fun()` is declared inside a block, and strict mode is applied.

Since the function `fun()` is declared within a block and strict mode is enabled, `fun()` will not be accessible outside of the block. Attempting to access `fun` outside the block will result in a reference error.

So, running `console.log(fun)` will throw a reference error because `fun` is not accessible outside the block due to strict mode.*/

// Let Blovk Scoping
var teacher = "Sanket"; //global

function fun() { // global
    console.log(teacher);// noo error will be given
    console.log(content); //throws an error
    var teacher = " Pulkit"; //scope of fun
    let content = "JS"; //content will be acces only post declaration
    if (content == "JS") {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(content);

/*Function Scope:

Variables declared within a function using the 'var' keyword (prior to ES6) are scoped to that function.
These variables are accessible only within the function in which they are declared and are not visible outside of it.

Block Scope (introduced in ES6 with the let and const keywords):
Variables declared using let and const are scoped to the nearest enclosing block, which can be a block of code within a function, a loop, or an if statement.
These variables are accessible only within the block in which they are declared.*/
// Var in Block Scope
function fun() {
    var i = 5;
    while (i < 10) {
        var x = i;
        i++;

    }
    console.log(x)
}
fun();
let i = 1;
console.log(y);
while (i < 5) {
    var y = 10;
    i++

}
console.log(y);

//Use case of Var
function fun(x){
    let i ;// var i
    if(x%2 == 0 ){
        i= 0;

    }
    else{
        i= 1;

    }
}

function gun(x){
    if(x%2 == 0 ){
       var i= 0;

    }
    else{
       var i= 1;
        
    }
    console.log(i);
}
gun(10);



hfcf





































