let score =100;
const balance =new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2));
const otherNum= 23.0987
console.log(otherNum.toPrecision(4))
const hun=1000000
console.log(hun.toLocaleString('en-IN'))
//MATHS
console.log(Math);
console.log(Math.abs(-3))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,7,9))
console.log(Math.max(4,3,7,9))
const max =20,min =10
console.log(Math.random()*10)//random value between 0 to 1 thats why we multiply by 10
console.log(Math.floor(Math.random()* (max - min + 1))+min)