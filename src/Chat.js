import React, { useState, useEffect } from "react";
import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 200));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://i.pravatar.cc/${seed}`} />
        <div className="chat_headerInfo">
          <h4>Room Name</h4>
          <p>Last seen at..</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Sudip Giri</span>
          My message.
          <span className="chat_timestamp">12.52am</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
