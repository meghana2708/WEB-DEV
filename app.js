var list = document.querySelector('ul')
console.log(list)
var arr = ['go to gym', 'cook', 'eat']
for (var i = 0; i < arr.length; i++) {
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
        //method to create textnode
    element.appendChild(textNode)
    console.log(element)

}