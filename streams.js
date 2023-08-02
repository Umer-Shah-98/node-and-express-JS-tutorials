const {createReadStream}=require('fs');

const stream = createReadStream('./built-in-modules/content/big-text.txt',{highWaterMark:1000,encoding:'utf8'});

//default 64kb
//last buffer is a remainder
//highWaterMark - control size

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})