const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome back!");
    }
    if(req.url==='/contact'){
        res.end("Contact us through : ");
    }
    if(req.url==='/about'){
        res.end("Here is our short history");
    }
    res.end(`<h1>Oops!</h1>
    <p>We can not find the page you are looking for</p>
    <a href='/'>back home</a>`)

    
})

server.listen(5000);