let score = "33"

console.log(typeof score);
console.log(typeof(score));// can be written like this as well
let valInNum = Number(score)//conversion
console.log(typeof(valInNum))
console.log(valInNum)//higher version of JS resolves the NaN issue which used to be encountered earlier
let score1= null //check for NULL
console.log(typeof(score1));
let valInNum1 = Number(score1)//conversion
console.log(typeof(valInNum1))
console.log(valInNum1)
let score2; //check for undefined
console.log(typeof(score2));
let valInNum2 = Number(score2)//conversion
console.log(typeof(valInNum2))
console.log(valInNum2)
// In short conversion are as follows
//"33"=>33
//"abcd"=>NaN
//true=>1; false=>0
let isLoggedIn =1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=> true; 0=>false
//""=> false
// "akshat" =>true
let num= 10;
let strNum =String(num)
console.log(strNum)
console.log(typeof strNum)