const http = require('http')
const fs = require('fs')

const PORT = 8000

const server = http.createServer(handleRequest)

function handleRequest(req, res) {
    let path = req.url
    switch (path) {
        case '/':
            return displayWelcomePage(req, res)
        case '/thanks':
            return displayThankYouPage(path, req, res)
    }
}

const displayWelcomePage = (req, res) => {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/html'
            })
            res.end('<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1><html>')
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        }
    })
}

const displayThankYouPage = (req, res) => {
    let requestData = ''
    req.on('data', (data) => {
        requestData += data;
    })
    req.on('end', () => {
        console.log('You did a', req.method, 'with the data:\n', requestData)
        res.end()
    })
}

server.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT)
})