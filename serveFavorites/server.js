const http = require('http')
const fs = require('fs')

const PORT = 8080

const server = http.createServer(handleRequest)

function handleRequest(req, res) {
    let path = req.url

    switch (path) {
        case '/':
            return displayHome(path, req, res)

        case '/foods':
            return displayFoods(path, req, res)

        case '/movies':
            return displayMovies(path, req, res)

        case '/frameworks':
            return displayCSS(path, req, res)

        default:
            return display404(path, req, res)
    }
}

const displayHome = (url, req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })
}

const displayFoods = (url, req, res) => {

}

const displayMovies = (url, req, res) => {

}

const displayCSS = (url, req, res) => {

}

const display404 = (url, req, res) => {

}

server.listen(PORT, () => {
    console.log('Server is listening on PORT: ' + PORT)
})