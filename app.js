/* for (var i = 0; i < 10; i++) {
    /* console.log(i) 

console.log(i) */

/* if (true) {
    var Name = "ferrari"
    if (true) {
        console.log(Name)
    }
} */

/* const print = () => {
    var Name = "mercedes"
    if (true) {
        console.log(Name);
    }
    return Name
}
print() */

/* console.log(this.alert('hi')) */

let car = {
    name: "c class",
    manufacturer: "merecedes",
    print: function() {

        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}
car.print()
console.log(Object.values(car))
console.log(Object.keys(car))
    /* car.print()

    let car = {
        name: "c class",
        manufacturer: "merecedes",
        print: () => {
            console.log(this)
            console.log(`${this.name} was created by ${this.manufacturer}`)
        }
    }
    // o/p : undefined was created by undefined

    car.print() */

//promises
var data = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(data)