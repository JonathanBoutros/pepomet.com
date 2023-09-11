import { useState } from "react";
import "./main.css";
import Message from "./message";

const Main = () => {
    const [message, setMessage] = useState(""); // Initialize with an empty string
    const [messages, setMessages] = useState([]);

    const handleSubmit = () => {
        if (message.trim() !== "") { // Properly invoke trim() here
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    return (
        <div className="container">
            <h1>The Quotes of the day</h1>
            <div className="content">
                <Message messages={messages} />
            </div>
            <div className="inputContent">
                <input
                    type="text"
                    className="input"
                    placeholder="Write your Quotes"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button className="btn" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Main;
