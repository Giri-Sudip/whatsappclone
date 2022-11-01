import React,{useState,useEffect} from 'react'
import './Chat.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Chat = () => {
    const [seed, setSeed]= useState('');
    useEffect(() => { setSeed(Math.floor(Math.random()*200))
    },[])
  return (
    <div className="chat">
    <div className="chat_header">
              <Avatar src={`https://i.pravatar.cc/${seed}`}/>
              <div className="chat_headerInfo">
                <h4>Room Name</h4>
                <p>Last seen at..</p>
              </div>
              <div className="chat_headerRight">
                <IconButton>
                  <SearchIcon/>
                </IconButton>
                  
                  <IconButton>
                    <AttachFileIcon/>

                  </IconButton>
          <IconButton>
            <MoreVertIcon />

          </IconButton>

              </div>
    </div>
    <div className="chat_body">

    </div>
    <div className="chat_footer">

    </div>

    </div>
  )
}

export default Chat;