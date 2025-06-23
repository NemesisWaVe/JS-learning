const name = "akshat"
const repoCount =50 ;
//console.log(name +repoCount +"Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//this is string interpolation
const user = new String('nemi')
console.log(user[0])
console.log(user._proto_)
console.log(user.length)
console.log(user.toUpperCase())
console.log(user.charAt(2));
console.log(user.indexOf('m'));
const newString = user.substring(0,2)
console.log(newString);
const anotherString = user.slice(-6,2)
console.log(anotherString)
const newString1= "        hi       "
console.log(newString1.trim())
const url = "https://www.google.com%20"
console.log(url.replace('%20',''))
console.log(url.includes('wow'))
console.log(user.split('e'))