//Local Scope
//Let and Var have the same behavior  when they have local scope


function someFunction() {
    var data = 3
    let data2 = 3
    //data is created here inside of the function.
    //data2 can be create here inside of the function
    console.log("inside of the function, data = " +data)
    console.log("inside of the function, data2 = " +data2)

}
//the function runs and changes the value of data
someFunction()

//we can not use data or data2 outside of the function. They only exist inside it.
