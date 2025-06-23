//Object literals 
const sym =Symbol("key")
const jsUser ={ 
    name: "Akshat",
    "full name":"Akshat Bijalwan",
    [sym]:"key1",
    age: 20,
    location: "Bangalore",
    email:"ak47@gmail.com",
    isLoggedIn: false
}
console.log(jsUser.email)
console.log(jsUser["email"])
//console.log(jsUser.full name) cannot access like this
console.log(jsUser["full name"])
console.log(jsUser[sym])
jsUser.email="ak47@bruh"
//Object.freeze(jsUser)
jsUser.email="hi"
console.log(jsUser)
jsUser.greeting =function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting())//intrigued
jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting2())