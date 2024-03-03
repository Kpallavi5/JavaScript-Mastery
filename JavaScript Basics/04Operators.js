let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(y ** 3);

//Assignment Operators
let a = 10;
a += 7;//Here a+=10 is actually doing a=a+10
console.log("Value of a after Addition", a);

a %= 3;//Here a%=3 is actually doing a=a%3
console.log("Value of a after Modulo", a)

a *= 5;//Here a*=5 is actually doing a=a*5
console.log("Value of a after Multiplication", a);

a -= 3;//Here a-=3 is actually doing a=a-3
console.log("Value of a after substraction", a);



a /= 2;//Here a/=2 is actually doing a=a/2
console.log("Value of a after Division", a)



a **= 2;//Here a*=*2 is actually doing a=a^2
console.log("Value of a after Exponential", a)

//Relational Operators

let b = 10;
let c = 20;
let d = 5;
let e = 20;

console.log("b < d", b < d);
console.log("c > d", c > d);


//Logical Operators

console.log(true && false);
console.log(false || false);
console.log(true && false);
console.log((5 < 10) && (6 < 3));
console.log(!false); //logical Not
console.log(6 && 10);

