"use strict"; //treat all JS code as newer version 
//alert(3+3) //we are using nodejs, not browser
let name ="akshat" //string
let age =20 //number
let isLoggedIn = false //boolean
let job  //???
// the range of number is 2^53
//bigint
//string ->""
//boolean ->true/false
//null ->standalone value
//undefined ->
//symbol -> unique
//object
console.table([typeof age,typeof name, typeof null, typeof isLoggedIn, typeof job])
// above displays all types
//but how many types of datatypes are there?
//There are primitve and reference(non primitive)
//PRIMITIVE are 7 types: String, Number,Boolean, null,undefined,Symbol,BigInt
const id =Symbol('123')
const bigNum= 3456345345435435345n
//REFERENCE are : Array, Objects,Functions
//Another interesting point is that java is DYNAMICALLY typed language because we never gave a datatype to any variable right?
const array =["Bangalore","Mumbai","Delhi"]//array
let myObj={
    message:"hi",
    priority:"low"
}//object
const myFunc =function(){
    console.log("hi");
}//function
//similary typeof is also a function is used to give specific datatype
console.log(typeof(myFunc)) //actually object function
