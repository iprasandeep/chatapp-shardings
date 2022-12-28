const express =  require('express');
const socketio = require('socket.io')
const http = require('http')
const router = require('./router');

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{

    console.log('We have a new connection!!!');
    // call back function 
    socket.on('join', ({name, room }, callback)=>{
        console.log(name ,room );  
        callback();
       const error =  true;

       if(error)
       {
           callback({ error: 'error' });
       }
    });

    socket.on('disconnected', ()=>{
        console.log('User had left!');
    });
});

app.use(router);

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));