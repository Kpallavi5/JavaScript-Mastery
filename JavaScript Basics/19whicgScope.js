
/*In JavaScript, lexical scope and dynamic scope are two different mechanisms for determining the scope (visibility and accessibility) of variables within the code.

Lexical Scope:
Lexical scope is based on where variables and blocks of scope are authored in the code by the programmer.
In lexical scoping, the visibility of variables is determined by their position within the code structure.
When a function is defined within another function, the inner function has access to the variables and parameters of the outer function, this is known as closure.
Lexical scoping is the most common form of scoping in programming languages, including JavaScript.*/

// Which Scoping . js 

var teacher = "Sanket"; // teacher--> global-->sanket
function ask (question){ //ask --> global ,question -->ask
    console.log(teacher,question); // sanket why

}
function fun (){ //fun -->global
    var teacher = "Pulkit"; // teacher--> fun --> pulkit
    ask("why?")
}
fun();


var fun = '123';
function fun (){
    return 'fun2';

}
console.log(fun());

/*In this code snippet, you have a variable `fun` assigned the string value `'123'`, and then you have a function declaration with the same name `fun`. 

When you try to call `fun()` after the function declaration, it will output `'fun2'` because function declarations are hoisted to the top of their containing scope, which means the function definition is moved to the top during the compilation phase. Therefore, the function definition overwrites the value of the variable `fun`. 

So, the output will be:

```
fun2
```
*/












