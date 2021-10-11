 const button = document.querySelector('button')
 const input = document.querySelector('input')
 const div = document.querySelector('div')
 const arr = [1, 2, 3, 4]



 localStorage.setItem('InputValue', JSON.stringify(arr))
 console.log(localStorage.getItem('InputValue'))
 console.log(JSON.parse(localStorage.getItem('InputValue')))