//Life cycle of variables in javascript

// Global and local variables

var age = 25; //<= it is a global variable.

function greetUser(){
    var name = "Omer"; //<= local variable
    console.log(name);
    var age = 10;

    console.log(age);
}

//console.log(age);
//console.log('name :', name); // <= undefined. Because variable is between function scopes.
greetUser();
console.log(age);