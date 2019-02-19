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
            return displayThankYouPage(req, res)
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
    let myHTML = '<html><head><title>Hello World!</title></head><body><h1>Oops, I did not receive any data</h1></body></html>'
    req.on('data', (data) => {
        requestData += data;
        console.log('You did a', req.method, 'with the data:\n', requestData)
        myHTML =
        '<html><head><title>Hello World!</title></head><body>' +
        '<h1>Thank you for the data: </h1><code>' +
        requestData +
        '</code>' +
        '</body></html>'
    })
    req.on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(myHTML)
    })
}

server.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT)
})