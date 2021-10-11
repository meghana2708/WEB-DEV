// /* let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
//     console.log(data)
// }) */
// const list = document.querySelector('ul')

// let arr = ['one', 'two', 'three', 'four']
// console.log(list)
// arr.forEach(chore => {
//     const element = document.createElement('li')
//     const textNode = document.createTextNode(chore)
//     element.appendChild(textNode)
//     console.log(element)
//     list.appendChild(element)
//     element.addEventListener('click', (e) => {
//         const useInput = window.prompt(`are you sure that you want to delete "${chore}"`)
//         if (useInput == 'YES') e.target.remove()
//     })
// })
// let value = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello')
//         }, 3000)
//     })
// setTimeout(() => {
//     console.log(value)
// }, 4000)
// value.then(name => console.log(name))
const table = document.querySelector('table')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            let newFlow = document.createElement('tr')
                /* let dataID = document.createElement('td')
                let dataIDtextNode = document.createTextNode(user.name)
                dataID.appendChild(dataIDtextNode)
                newFlow.appendChild(dataID)
                table.appendChild(newFlow) */
            let element = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>`
            console.log(element)
            newFlow.innerHTML = element
            table.appendChild(newFlow)
                //herw we are appending the string in  line 46
                //but appendChild accepts a node, so use innerHTML





        })
    })