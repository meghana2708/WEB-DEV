 const express = require("express")
 const PORT = 3000
 const app = express()
     /* const isAdmin = (req, res, next) => {
             if (req.headers.admin === 'true') next()
             else res.send('UNAUTHORISED')

         } */
     //  const verify = (req, res, next) => {
     //      //next moves the request to callback
     //      //  app.get('/', (req, res) => {
     //      // console.log(req)
     //      if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next() //res.send("GET")
     //      else res.send('BLOCKED')
     //}
     /* app.get('/public', (req, res) => {
         console.log(req.headers)
         res.send('i am a public route')
     })
     app.get('/private', isAdmin, (req, res) => {
             console.log(req.headers)
             res.send('i am a admin route') */
     // })
     //  app.post('/', (req, res) => {
     //      res.send('POST')
     //  })
     //  app.put('/', (req, res) => {
     //      res.send('PUT')
     //  })
     //  app.patch('/', (req, res) => {
     //      res.send('PATCH')
     //  })
     //  app.delete('/', (req, res) => {
     //      res.send('DELETE')
     //  })
 app.post('/signup', (req, res) => {
     console.log(req.body)
     res.send('dada')
 })
 app.listen(PORT, () => {
     console.log(`Server running at ${PORT}`)
 })