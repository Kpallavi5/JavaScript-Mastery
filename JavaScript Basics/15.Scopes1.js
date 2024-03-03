var teacher ="Sanket";
function fun(){
    var teacher ="Pulkit";
    content ="JS";//global variable
    console.log(teacher);

}
function gun(){
    var student ="Sarthak";
    
    console.log(student);

}
fun();
gun();
console.log(teacher);
console.log(content);


//this mechanics of auto global only works when you are trying to assign the value to the variable.