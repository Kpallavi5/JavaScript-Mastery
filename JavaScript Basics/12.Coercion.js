/* ******Coercion********* */
// To Number 
console.log(2 - 9); //7
console.log(2 - null); //null --> 2-0 =2
console.log(2 - undefined); //2 - undefined --> 2-NaN -->NaN

console.log(1 - "567");
//assignment 
console.log(1 - "0*a");

let obj = {
    toString() {
        // by default gives [object Object]
        return "98";
    },
    valueOf() {
        // by default, it returns the same object
        return 98; // Corrected to return a primitive value
    }
};



/*The toString: function () syntax in JavaScript is part of creating a method within an object. Let's break it down in simpler terms.

In JavaScript, objects can have properties, and these properties can be functions. When a function is a property of an object, it is called a method. The toString method is a special method that, when present in an object, determines how that object should be represented as a string.

Here's a breakdown:

toString: This is a property of the object. The name of the property is "toString."

function () { ... }: This is the value assigned to the "toString" property. It's an anonymous function (a function without a name) that gets executed when you call toString on the object.

Putting it together:*/

let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    toString: function () {
        return this.brand + ' ' + this.model + ' (' + this.year + ')';
    }
};

let carString = car.toString();
console.log(carString);

//ToPrimitive 
let obj1 = {};
console.log(10 - obj1); //obj1.valueOf-->object , toString-->[object Object]

let obj2 = { x: 9, y: 8 };

console.log(100 - obj2);

let obj3 = { x: 7, valueOf() { return 99 } };
console.log(100 - obj3);

let obj4 = { x: 8, toString() { return "88" } };
console.log(90 - obj4);


let obj5 = { x: 8, toString() { { } } };
console.log(90 - obj5);

 /* ***********for object 5 ************
Assert: Type(O) is Object.
Assert: Type(hint) is String and its value is either "string" or "number".
If hint is "string", then
Let methodNames be « "toString", "valueOf" ».
Else,
Let methodNames be « "valueOf", "toString" ».
For each name in methodNames in List order, do
Let method be ? Get(O, name).
If IsCallable(method) is true, then
Let result be ? Call(method, O).
If Type(result) is not Object, return result.
Throw a TypeError exception.*/



















