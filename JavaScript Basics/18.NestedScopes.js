function fun(){ // fun -->global scope 
    var x = 10; //x-->fun scope
    function gun(){ // gun --> fun scope
        var y = 20 ;  /// y --> gun scope
        console.log(x); // 10
        console.log(y); //20

    }
    gun();
    console.log(x); //10
    console.log(y); //error


}
fun();

/* you always go one scope out,thats why  " console.log(x); // 10" this line doesn't through an error , and  "console.log(y); //error"this line does , because one scope out there in no y , there is no global y */


