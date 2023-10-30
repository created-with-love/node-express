const http = require('http')

// 4:16:20
const server = http.createServer((req,res) => {
    console.log('user hit the server')

    res.end('Wake up, Neo...')
})

server.listen(5000)