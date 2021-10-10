// /* let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
//     console.log(data)
// }) */
const list = document.querySelector('ul')

let arr = ['one', 'two', 'three', 'four']
console.log(list)
arr.forEach(chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    console.log(element)
    list.appendChild(element)
    element.addEventListener('click', (e) => {
        const useInput = window.prompt(`are you sure that you want to delete "${chore}"`)
        if (useInput == 'YES') e.target.remove()
    })
})