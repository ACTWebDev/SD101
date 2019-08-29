var car = {make:"Ford",model:"Mustang",year:"1990",color:"silver",value:"6,000.95"}

for (keyname in car){
    console.log(keyname);
    console.log(car[keyname]);
}

var someObject = {a:"Value 1"}
someObject.b = "Value 2"
console.log(someObject.b)