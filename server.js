/* let arr = [{ chore: 'Go to the Gym', status: 'incomplete' }, { chore: 'Cook Food', status: 'incomplete' }, { chore: 'Drink water', status: 'complete' }]
arr[0].status = 'complete'
console.log(arr) */
//  let arr = [{ chore: 'Go to the Gym', status: 'incomplete' }, { chore: 'Cook Food', status: 'incomplete' }, { chore: 'Drink water', status: 'complete' }]
//  const renderList = (filter /* = 'all' */ ) => {
//      arr.forEach(element => {
//          if (filter === 'all') {
//              //console.log(element)
//          } else if (element.status === filter) {
//              console.log(element)
//          }
//      })
//  }
//renderList('incomplete')
const express = require('express')
const app = express()
app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')
app.get('/products/:categories', (req, res) => {

    if (req.params.categories == 'band') {}
    console.log(req.params)
    res.send('PING')
})
app.listen(3001, (req, res) => {
    console.log("listening at port 3001")
})