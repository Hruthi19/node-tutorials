const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.end('Hey this home page')
    }
    if(req.url ==='/about'){
        res.end('this is about page')
    }
    res.end(`
    <h1>wrong url</h1>
    `)
    
})

server.listen(5000)