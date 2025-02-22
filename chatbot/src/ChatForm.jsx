import React from 'react'
import { useRef } from 'react';

function ChatForm({chatHistory, setChatHistory, generateBotResponse}) {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";
        
        //UPDATE CHAT HISTORY WITH USER MESSAGES
        setChatHistory(history => [...history, {role:"user", text: userMessage}]);
        
        setTimeout(() => {
            //FOR 'THINKING' FOR CHATBOT RESPONSE
            setChatHistory((history) => [...history, {role:"model", text: "Purring..."}])
            
            //GENERATE BOT RESPONSE
            generateBotResponse([...chatHistory, {role:"user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
        }, 600);
    }
  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder='Feel free to ask Cobbie! 🐾' required/>
            <button className="material-symbols-outlined"> arrow_upward</button>
    </form>
    </div>
  )
}

export default ChatForm
