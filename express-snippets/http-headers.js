const http = require("http");
//4.32.23
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(res);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>Home Page</h1>');
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>about</h1>');
    res.end();
  }
  else{
    res.writeHead(404,{'content-type':'text/html'});
    res.write(`<h1>Page not Found 404.</h1>`)
    res.end();
  }
});

server.listen(5000);
