//  const path = require('path')
//  console.log(path.resolve('./app.js'))
//  console.log(path.relative('/', "./app.js"))
//  console.log(path.extname('./app.js'))
//  console.log(path.dirname('./temp/utils.js'))
//  console.log(path.join(__dirname, 'app.js'))
//  console.log(__dirname)
const fs = require('fs')
fs.readFile('./text.txt', 'utf8', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})
console.log(fs.readFileSync('./text.txt', 'utf8')) //this is synchronous so it is going to execute first
console.log('i am a dog')
    //i am a dog is goint to execute first because readFile takes time since it is a asynchronous task
fs.writeFile('./text.txt', "new stuff", (error) => {
    if (error) console.log(error)
})