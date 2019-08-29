//var someObject = {a:"Value 1"}  //create the object. the only property is a
//someObject.b = "Value 2" //add a new property, b, and assign it a value
//console.log(someObject.b)

var dog  = {
    name:"Milo",
    breed:"German Shepard",
    age: "5", 
    bark: function() {
        console.log(this.name + " barks! Watch out!")
    }
}
dog.bark()
