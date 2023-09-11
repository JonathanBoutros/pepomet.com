import React from "react"; 
import "./message.css";

const Message = ({ messages }) => { 
    return (
        <div className="messageContent">
            {messages.map((msg, index) => (
                <div className="message" key={index}>
                    {msg}
                </div>
            ))}
        </div>
    );
};

export default Message;
