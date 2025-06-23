const positive =[1,2,3,4]
const negative =[-1,-2,-3,-4]
// positive.push(negative)
// console.log(positive)
// const integers=positive.concat(negative)
// console.log(integers)
const integers =[...positive,...negative]
console.log(integers)
console.log(Array.isArray("Akshat"))
console.log(Array.from("Akshat"))
console.log(Array.from({name:"Akshat"}))//must be investigated further
let sc1=1,sc2=2,sc3=3;
console.log(Array.of(sc1,sc2,sc3))