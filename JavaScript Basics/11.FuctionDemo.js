function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// let x = 10;
// let result = isEven(x);
// if (result == true) {
//     console.log("Even");

// }
// else {
//     console.log("Odd");
// }

for (let i = 1; i <= 20; i++) {
    let result = isEven(i);
    if (result == true) {
        console.log (i,"Even");

    }
    else {
        console.log(i, "Odd");
    }
}