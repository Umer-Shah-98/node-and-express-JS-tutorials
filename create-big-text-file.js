const {writeFileSync}=require('fs')

for(let i=0; i<100; i++){
    writeFileSync('./built-in-modules/content/big-text.txt',`hello world${i}\n`,{flag:'a'})
}