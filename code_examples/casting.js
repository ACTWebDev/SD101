"use strict";

var someNumber = 10; //this is a number
var someText = '15'; // this is text

console.log(someNumber + someText);
//Result = 1015

console.log(someNumber + Number(someText));
//Result = 25

console.log("Treat these variables as text: " + String(someNumber) +  " & " + String(someText));
//Treat these variables as text: 10 & 15