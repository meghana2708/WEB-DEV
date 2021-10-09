/* let value = new Promise((re, reject) => {
    setTimeout(() => {
        re('hello')
    }, 3000)
})
setTimeout(() => {
    console.log(value)
}, 4000) */

let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {

    //.then returns a promise here
    let parseData = res.json()
    console.log(parseData)
    return (parseData)
}).then(data => { console.log(data) })