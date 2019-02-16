const http = require('http')

// First server port will listen on 7000
const PORT = 7000
// Second server port will listen on 7500
const PORT2 = 7500

// Generic function to handle requests and responses
const handleRequest = (req, res) => {
    res.end('You are a spiritual gangster')
}

const requestHandler = (req,res) => {
  res.end('You are NOT a spiritual gangster')
}

// Using Node http package to create server
const server1 = http.createServer(handleRequest)
const server2 = http.createServer(requestHandler)

// Start server
server1.listen(PORT, () => {
    // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
})

server2.listen(PORT2, () => {
  console.log('Server listening on: http://localhost:' + PORT2)
})