 const button = document.querySelector('button')
 const input = document.querySelector('input')
 const div = document.querySelector('div')
 div.innerHTML = localStorage.getItem('inputvalue')
 button.addEventListener('click', (req, res) => {
         localStorage.setItem('inputvalue', input.value)
         div.innerHTML = input.value

         //localStorage.setItem('inputvalue', "Something")
     })
     //localStorage.setItem('InputValue', "Something")
     //console.log(localStorage.setItem('inputvalue', "Something"))