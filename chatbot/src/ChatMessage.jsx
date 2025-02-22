import React from 'react'

const ChatMessage = ({chat}) => {
  return (
    !chat.hideInChat && (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "model" && <img src="/pawtopia_logo.svg" alt="icon" />}
        <p className="message-text">{chat.text}</p>
    </div>
  ))
}

export default ChatMessage
 