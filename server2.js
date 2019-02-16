// require http
const http = require('http')

// assign PORT
const PORT = 7500

// function to handle req/res
const requestHandler = (req,res) => {
    res.end('You are NOT a spiritual gangster')
}

// create server with node http package
const server = http.createServer(requestHandler)

// start server
server.listen(PORT, () => {
    // log server listening in node
    console.log('Server listening on: http://localhost: ' + PORT)
})