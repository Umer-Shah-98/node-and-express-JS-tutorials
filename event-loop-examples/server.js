const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page.");
    return
  }
  if (req.url === "/about") {
    //BLOCKING CODE!!!! 
    for(let i=0; i<10; i++){
        for(let j=0; j<1000; j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end("About Page.");
    return
  }
  res.end('Error Page.')
});

server.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})