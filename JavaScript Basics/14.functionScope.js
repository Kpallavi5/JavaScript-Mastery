
if (true) {
    var x = 10;
    //var doesn't support block scoping

}
console.log(x);


function fun(){
    console.log(y);//y is accessible here
    var y = 10;
}


function gun(){
    console.log(z);// not accessible here
    let z= 10;
}
//console.log(z);
//gun();