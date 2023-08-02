setInterval(()=>{
    console.log('js is synchronous.');
},2000)

console.log('I will run fast');
//process stays alive unless:
//Kill process CTRL+C
//unexpected error