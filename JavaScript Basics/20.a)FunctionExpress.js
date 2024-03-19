//Function In Block JS 
{
    function fun(){
        return "123";

    }

}
console.log(fun);
/*

In JavaScript, when you declare a function inside a block like `{}`, the behavior can change depending on whether you're using "strict mode" or not.

1. **Without strict mode**:
   - The function declared inside the block is visible outside the block.
   - So, `console.log(fun)` will print the function definition without any errors.

2. **With strict mode**:
   - The function declared inside the block is not visible outside the block.
   - So, `console.log(fun)` will throw a reference error because `fun` is not accessible outside the block.

In simpler terms, without strict mode, the function is like a friendly neighbor who comes out of their house to greet you. But in strict mode, it's like they've locked their door and don't want to come out, so you can't see or interact with them from outside.
In the provided code:*/

//Function In Block Strict mode  JS 
"use strict";
{
    function fun(){
        return "123";

    }
    console.log(fun);

}
console.log(fun);

/*

The `"use strict";` directive enables strict mode for the entire script or the enclosing function, in this case, the block.

Here's how strict mode affects this code:

1. **Inside the block**:
   - The function `fun()` is defined within the block. Since strict mode is enabled within the block, the function `fun()` is scoped to that block only. It cannot leak out to the outer scope.
   - When `console.log(fun)` is executed within the block, it successfully logs the function definition because `fun()` is accessible within the same scope where it's defined.

2. **Outside the block**:
   - When `console.log(fun)` is executed outside the block, `fun()` is not accessible. This is because strict mode confines the scope of `fun()` to the block where it's defined. Attempting to access `fun()` outside the block will result in a reference error because `fun` is not defined in the outer scope.

In summary, strict mode confines the scope of `fun()` to the block where it's defined, preventing it from being accessed outside that block. This behavior helps prevent unintentional variable/function declarations from polluting the global scope, thereby improving code clarity and reducing the likelihood of naming conflicts and bugs.*/

//Let block Scoping 
var teacher = "Sanket"; //global 
function fun(){ //global
    console.log(teacher); //np error will be given
    console.log(content); // throws an error
    var teacher = " Pulkit"; //scope of fun
    let content = "JS" // content will be access only post declaration
    if(content == "JS")
    {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher,content);

}
fun();
console.log(teacher);
console.log(content);




