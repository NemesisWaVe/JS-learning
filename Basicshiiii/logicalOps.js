console.log("greater than:"+(2>1))
console.log("greater than equal to:"+(2>=1))
console.log("lesser than:"+(2<1));
console.log("equals:"+(2 == 1))
console.log("not equals:"+(2 != 1))
//but can we compare with different datatypes? Yes but it never gives predictable result
console.log("2">1)
console.log("02">1)//unpredictable result
console.log(null >0)
console.log(null == 0)//equals doesnt convert null to number
console.log(null>=0)//while our comparison number does, since quality different than comparison operators
//similarly for undefined you get false for all above
//=== checks for datatype as well
console.log("2"===2)