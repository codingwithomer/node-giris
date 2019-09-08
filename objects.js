//Defining object
var araba = {
    name : "Fiat",
    model : "500",
    weight : "850kg",
    color : "Gray",
    start : function(){
        console.log("Araba çalıştı...");
    }
};

//Get Operations
console.log(araba);

console.log("Aracın markası : " + araba.name);

console.log("Aracın modeli : " + araba["model"]);


// Add Property
araba.sunroof = "Var";

console.log(araba);

//Deleting propery

delete araba.color;

console.log(araba);

araba.start();