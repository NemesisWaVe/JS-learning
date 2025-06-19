const accountID = 12345
let accEmail = "ez@gmail.com"
var accPass ='bruh'
accCity ="Bangalore"
//accountID =123 //error with rewriting with const
console.log(accountID);
console.table([accountID,accEmail,accPass,accCity])//better representation and easier to write
//why not use var because of its scope in a particular block or functional scope
let accState;
//what will be the output?
console.log(accState)