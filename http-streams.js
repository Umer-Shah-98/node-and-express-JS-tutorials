let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
   const fileStream=fs.createReadStream('./built-in-modules/content/big-text.txt','utf8');
   fileStream.on('open',()=>{
fileStream.pipe(res)
   })

   fileStream.on('error',(err)=>{
    res.end(err);
   })
    // const text=fs.readFileSync('./built-in-modules/content/big-text.txt','utf8')
    // res.end(text)

}).listen(5000)