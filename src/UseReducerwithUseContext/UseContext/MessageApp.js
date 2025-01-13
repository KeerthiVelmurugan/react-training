// src/App.js
import React, { useContext, useState } from 'react';
import { MessageContext } from './MessageContext';


function MessageApp() {
    const[text,setText] = useState()
  const { message, updateMessage } = useContext(MessageContext);

  return (
    <div>
      <h1>{message}</h1>
      <input type='text' onChange={(e)=> {setText(e.target.value)}} />
      <button onClick={() => updateMessage(text)}>
        Update Message
      </button>
    </div>
  );
}

export default MessageApp;
