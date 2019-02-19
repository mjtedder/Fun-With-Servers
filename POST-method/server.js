const http = require('http')

const PORT = 8080

const server = http.createServer(handleRequest)

const handleRequest = (req, res) => {
    let requestData = ''

    req.on('data', (data => {
        requestData += data
    }))
    req.on('end', () => {
        console.log('You did a', req.method, 'with the data:\n', requestData)
        res.end()
    })
}

server.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT)
})