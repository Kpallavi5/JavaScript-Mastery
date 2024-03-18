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

// Let Block Scoping
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
function fun(x) {
    let i;// var i
    if (x % 2 == 0) {
        i = 0;

    }
    else {
        i = 1;

    }
}

function gun(x) {
    if (x % 2 == 0) {
        var i = 0;
        //this looks like more clean implementation
    }
    else {
        var i = 1;

    }
    console.log(i);
}
gun(10);

/*

The difference lies in the scope of the variable `i`.

In the `fun()` function, `let i;` is declared at the top of the function block. It has a block scope limited to the function `fun()`. This means that `i` is accessible only within the `fun()` function. 

In the `gun()` function, `var i;` is declared within the `if` and `else` blocks. However, due to hoisting in JavaScript, both declarations are brought to the top of the function, making `i` accessible throughout the function `gun()` but not outside of it.

Now, as for which is cleaner, it's subjective. Some developers prefer `let` because it explicitly declares the scope of the variable. Others might find the use of `var` cleaner because it keeps the variable declaration closer to where it's being used.

However, in terms of best practices and modern JavaScript, using `let` or `const` is generally preferred over `var` because it provides better control over variable scope and prevents certain types of bugs that can arise due to hoisting and variable redeclaration. So, the `fun()` implementation with `let` is considered cleaner and more modern.
*/

// use case of let 
function fun() {
    for (let i = 0; i < 10; i++) {
        //do something
        /*here ,this kind of implementation might not be useful cause
         var will be accessible outside the for loop which is not good in general for program ,that's why 'let " will be more good to use here */
        console.log(i);
    }
}
    function process(x, y) {
        if (x > y) {
            /*var temp = x; // this temp variable has no use outside the if block , but still it */
            let temp = x;
            x = y;
            y = temp;
        }
        return x - y;

    }
    fun();


    
//Re -declaration 
// var x = 2;
// var x = 3;
// var allows re-declaration

// let y = 4;
// let y = 5;
// let doesn't allow re-declaration





























