function amountErrorCheck(amount){
    if (amount <= 0.00){
        throw "amount can not be a negative number"
    }
}

var amount = -50.00

try{
    amountErrorCheck(amount)
}
catch{
    amount = 0.00
    console.log("Handled error -- amount can not be a nagative number")
}

var carInfo = {make:"Ford",model:"Mustang",year:"1990",color:"silver",value:"6,000.95"}
