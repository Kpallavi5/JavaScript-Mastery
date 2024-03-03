
//this fails in execution

console.log("Hi");
console = {lo:function(str) {}}
//console.lo("Hello"); // will through an error
console.log("Bye");
console.log(10..toString())
//In JavaScript, when you have a number followed by two dots, like `10..toString()`, it doesn't result in a syntax error due to the way the language parser handles it.

/*When the parser encounters the first dot after the number `10.`, it assumes that you're working with a floating-point number. The second dot is then treated as a property accessor. So, `10..toString()` is equivalent to `(10.).toString()`.

Here's the breakdown:

1. `10.` is a valid way to represent the floating-point number `10.0`.
2. The first dot is interpreted as part of the number.
3. The second dot is then treated as a property accessor to access the `toString` method on the number `10.0`.

If you want to make the code more clear, you can add parentheses around the number like this:

```javascript
console.log((10).toString());
```

This ensures that the parser correctly treats the number as a whole before applying the `toString` method.*/