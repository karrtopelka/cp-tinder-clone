import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images-ssl.gotinder.com/5efd0daad0c5fb010064a243/640x800_75_bcfcc4e5-307a-4677-b81c-4779b5eaa8eb.webp",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://images-ssl.gotinder.com/5edba5f4961b020100e15829/640x800_75_57f21250-c16b-4cf3-8e2a-0a9850f46b0a.webp",
      message: "How its going",
    },
    {
      message: "HELOU",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__time">YOU MATCHED WITH ELLEN ON 10/10/2010</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="chatScreen__inputField"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
