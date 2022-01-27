const http = require('http')
const {fork} = require('child_process')

const host = 'localhost'
const port = 5000

const slowFunction = () => {
    let count = 0
    while (count < 10000000000){
    count ++
    }
    return count
}


const requestListener = function(req, res) {
    if(req.url === '/total') {
        const child = fork(__dirname + "/getCount.js") //el fork abre el proceso secundario
        child.on('message', message => {
            console.log('Retornando los resultados de /total')
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(200)
            res.end(message)
        })
        child.send('START')
    } else if (req.url === '/sayhi') {
        console.log('Retornando los resultados de /sayhi')
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)
        res.end('{"message":"Hola"}')
    }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`El servidor se esta ejecutando en http://${host}:${port}`)
})

