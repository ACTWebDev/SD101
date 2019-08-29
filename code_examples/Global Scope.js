//Global Scope
//Let and Var behave the same when they have global scope.

var data = 7
let data2 = 7
console.log("var data = " + data)
console.log("let data2 = " + data2)
//var has global scope -- it can be used anywhere
//let data has global scope -- it can be used anywhere


function someFunction() {
    data = 3
    data2 = 3
    //data is reused here inside of the function.
    //data2 can be reused here inside of the function
    console.log("inside of the function, data's value is changed to " +data)
    console.log("inside of the function, data2's value is changed to " +data2)

}
//the function runs and changes the value of data
someFunction()
console.log("outside of the the function, data's value has been change "+ data)
console.log("outsdie of the function, data2's value is changed to " +data)
