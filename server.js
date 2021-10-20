 /* let data = []
       data.forEach(item => {
           console.log(item)
       }) */
 const database = require('./database/db')
 const express = require('express')
 const app = express()
 app.use(express.json())
 const categoryRoutes = require('./routes/categoryRoutes')
 console.log(categoryRoutes.stack)
 app.use('/categories', categoryRoutes)
 app.get('/', (req, res) => {
     try {
         console.log(document)
             // res.send(error.message)
     } catch (error) {
         res.status(401).send(error.message)
     }
     // console.log(document)
 })

 app.listen(3001, () => {
     console.log('listening at port 3001')
 })