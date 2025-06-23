const arr=[0,1,2,3,4]
const city =["Bangalore","Mumbai","Dehradun"]
const arr2 =new Array(1,2,3,4)
console.log(arr[1]);
//methods
arr.push(5)
console.log(arr)
arr.pop()
arr.unshift(0)
console.log(arr)
arr.shift(9)
console.log(arr)
console.log(arr.includes(9))
console.log(arr.indexOf(3))
const newArr = arr.join()
console.log(newArr)
//slice & splice
console.log('a',arr)
const myn1 =arr.slice(1,3)
console.log(myn1);
console.log("b",arr);
const myn2=arr.splice(1,3)
console.log("c",arr);
console.log(myn2)
