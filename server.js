const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  if(request.url === '/read') {
    response.end('hello')
  }
})

server.listen(5000)