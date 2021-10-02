//function expression
var greet = function(Name, age) {
    console.log(Name, age)



}
greet('john', 99)




//function keyword
function add(a, b) {
    var sum = a + b
    return sum
}
var result = add(10, 20)
console.log(result)


//function expression
var add = function add(a, b) {
    var sum = a + b
    return sum
}


console.log(add(10, 20))

//this is a error because add is not declared before
//console.log(add(10, 20))
/*var add = function add(a, b) {
    var sum = a + b
    return sum
}*/

//arrow function
var add = (a = 0, b = 0) => {
    var sum = a + b
    return sum
}
console.log(add(10, 20))

//shortcut
var add = (a = 0, b = 0) => a + b
console.log(add(30, 40))

//
const greeting = name => 'hi' + name

console.log(greeting('meghana'))