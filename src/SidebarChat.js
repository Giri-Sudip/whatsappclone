import React,{useState, useEffect} from 'react'
import './SidebarChat.css';

import Avatar from '@mui/material/Avatar';

const SidebarChat = ({addnewChat}) => {
  const[seed, setSeed]= useState('');
  useEffect(() =>{
    setSeed(Math.floor(Math.random()*200));
  },[])
  const createChat=()=>{
    const roomName =prompt("Please enter name for chat");
    if (roomName){
      //do some database part
    }
// database part
  };


  return !addnewChat?(
    <div className="sidebarChat">
      {/* to make different avatar image we have used templete string and made the value dynamic */}
      <Avatar src={`https://i.pravatar.cc/${seed}`}/> 
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last message.....</p>
      </div>
    </div>
  ):(
    <div onClick={createChat} className="sidebarChat">
    <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat