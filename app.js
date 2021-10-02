//Call back function: executred after a specific task is completed
var arr = ['go to gym', 'eat food', 'clean house']


var callbackFunction = (element, any) => {
    console.log(element, any)
}
arr.forEach((element, index) => {
    console.log(element, index)
})