let value = new Promise((re, reject) => {
    setTimeout(() => {
        re('hello')
    }, 3000)
})
setTimeout(() => {
    console.log(value)
}, 4000)