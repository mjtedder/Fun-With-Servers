const http = require('http')

// First server port will listen on 7000
const PORT = 7000

// Generic function to handle requests and responses
const handleRequest = (req, res) => {
    res.end('You are a spiritual gangster')
}

// Using Node http package to create server
const server = http.createServer(handleRequest)

// Start server
server.listen(PORT, () => {
    // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
})