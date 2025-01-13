// src/MessageContext.js
import React, { createContext, useState } from 'react';
import MessageApp from './MessageApp';

// Create a context with a default value
export const MessageContext = createContext();

// Create a provider component
export const MessageProvider = () => {
  const [message, setMessage] = useState('Hello, World!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, updateMessage }}>
      <MessageApp />
    </MessageContext.Provider>
  );
};

export default MessageContext;
