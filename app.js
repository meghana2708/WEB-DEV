var headig = document.getElementById('heading')
var body = document.querySelector('body')
headig.inerHTML = "i am ot a headig"
headig.style = "color:red;font-size:2rem"
console.log(headig.classList)
    //gives the list of classes
headig.classList.add('five')
headig.classList.remove('one')
body.classList.add('dark')