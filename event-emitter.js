const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on("response",(name,id)=>{
    console.log(`data received from the user with name: ${name} and id: ${id}`);
})
customEmitter.on("response",()=>{
    console.log(`some other logic here`);
})

//order matters, first listen then will emit the event.
//additional arguments

customEmitter.emit("response",'ali',23)