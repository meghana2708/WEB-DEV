  const http = require('http')
  console.log(http)
  const fs = require('fs')
  const path = require('path')
      // const server = http.createServer((request, response) => {
      //     //req.url
      //     //console.log(request.headers)
      //     // console.log(req.method)
      //     // const path = request.url
      //     /*  const markup = fs.readFileSync(path.resolve('./index.html'))
      //      response.write(markup)
      //      response.end() */
      //     const { url } = request
      //     if (url == "/login") {
      //         response.write(`<h1>LOGIN</h1>`)
      //         response.end()
      //     }
      //     if (url == "/signup") {
      //         response.write(`<h1>SIGNUP</h1>`)
      //         response.end()
      //     }
      // }) 

  // server.listen(3000, () => {
  //     console.log(`Server listening at port : ${3000}`)
  // })
  const express = require('express')

  const app = express()
  app.get('/login', (req, res) => {
      console.log(req.url)
      res.send('this is login')
          // console.log(res)
  })
  app.listen(3000, () => {
      console.log("server listening at port 3000")
  })