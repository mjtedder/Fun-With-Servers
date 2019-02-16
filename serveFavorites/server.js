const http = require('http')
const fs = require('fs')

const PORT = 7000

const server = http.createServer(handleRequest)

function handleRequest(req, res) {
    let path = req.url

    switch (path) {
        //case '/':
           // return displayHome(path, req, res)

        case '/foods':
            return displayFoods(path, req, res)

        case '/movies':
            return displayMovies(path, req, res)

        case '/css':
            return displayCSS(path, req, res)

        default:
            return displayHome(path, req, res)
    }
}

// routes

const displayHome = (url, req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })
}

const displayFoods = (url, req, res) => {
    fs.readFile(__dirname + '/foods.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end(data)
    })
}

const displayMovies = (url, req, res) => {
    fs.readFile(__dirname + '/movies.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })

}

const displayCSS = (url, req, res) => {
    fs.readFile(__dirname + '/frameworks.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })

}

server.listen(PORT, () => {
    console.log('Server is listening on PORT: ' + PORT)
})