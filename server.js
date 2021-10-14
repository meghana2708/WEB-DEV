 const express = require('express')
 const app = express()
 const PORT = 3000
 const longer = (req, res, next) => {
         console.log(req.method)
         next() //this tells wat kind of request is made
     }
     //app.use(longer)//this will be added to each and every request
 app.use(express.json())
 const token = "TOP_SECRET"
     /* app.get('/', (req, res) => {
         res.send('Server running')
     })
     app.post('/', (req, res) => {
         console.log(req.body)
             //express.json is used to convert string to json object
         res.send('Server running')
     }) */
 let products = [{ name: 'iPhone12 Case', price: '999' }, { name: 'iPhone13 Case', price: '1199' }, { name: 'iPhone13 Pro Case', price: '1499' }]
 const validator = (req, res, next) => {
         const { name, price } = req.body
         if (!name || !price) res.json({ error: "Validation failed" })
         else next()
     }
     //-------PUBLIC routes-------------
 const isAdmin = (req, res, next) => {
     // const { token }
     if (req.headers.authorisation === token) {

         next()
     } else {
         res.json({ error: "UNAUTHORISED" })
     }

 }
 app.get('/products', (req, res) => {
         res.json({ products })
     })
     //----------PRIVATE routes---------------
 app.post('/products/add', isAdmin, validator, (req, res) => {
         const { name, price } = req.body


         products.push({
             name,
             price,

         })
         res.send({ products })

     })
     //------authentication
 app.post('/auth', (req, res) => {
     const { email, password } = req.body
     if (email == 'meghana.bamr@gmail.com' && password == 'password') {
         res.send({ token })
     } else {
         res.send({ message: "UNAUTHORISED" })
     }
 })

 app.listen(PORT, () => {
     console.log(`server running at ${PORT}`)
 })