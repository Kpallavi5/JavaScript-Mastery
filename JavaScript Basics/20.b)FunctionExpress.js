
// Named function declaration
function fun (){ // function declaration
    //some implementation
    
}


// Function expression assigned to variable 'f'
let f = function gun(){
    //some more implementation
}


// Function expression assigned to variable 'a'
let a = function(){
   // Ok, some more implementation
}

// Immediately Invoked Function Expression (IIFE) with the name 'x
(function x (){
    //can you stop it ?

})
//example 1.-
// Define and immediately invoke an IIFE named 'greet'
// (function greet() {
//     console.log("Hello!");
// })();
 //example 2.-
 (function x(y){
    console.log("hi",y);
 })("sanket");

// Another IIFE, this time anonymous
(function(){
    //i am done
})