const user={
    someemail :"email",
    userfullname:{
        firstname: "john",
        lastname: "doe"
    }
}
console.log(user.userfullname.firstname)
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c",4:"d"}
//const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3)
const users=[
    {
    },
    {
        id:1,
        email:"email"
    },
    {
    }
]
console.log(users[1].email)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('someemail'))
const course={
    coursename: "javascript",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor);