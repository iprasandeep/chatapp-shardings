import React, { useState, useEffect } from 'react'
import queryString from 'query-string';


import io from 'socket.io-client';
import './chat.css';

let socket;

const Chat = ({ location }) => {

  
  const [name, setName] = useState(' ');
  const [ room, setRoom] = useState('');
  const ENDPOINT = 'localhost:8080';

  useEffect(()=>{

    const {name, room } = queryString.parse(location);
    console.log(location);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit('join', { name: name, room: room});
    
    console.log(socket);
    socket.emit('join', { name, room},(error)=>{
        alert(error);
    });
  }, [ENDPOINT, location]);
  return() =>{
    socket.emit('disconnect');
    socket.off();
  }

  return (
    <div className='container'>
        <div className='chat-box'>
            This is chat box
        </div>
    </div>
  )
}

export default Chat;