import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar_header">
        <AccountCircleIcon />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
        </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          
        </div>

    </div>
    <div className="sidebar_search">
    <div className="sidebar_searchContainer">
      <SearchIcon/>
      <input placeholder="Search or start new chat" type="text"/>

    </div>
    </div>
    <div className="sidebar_chats">
       <SidebarChat addnewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

    </div>
        
    </div>
  )
}

export default Sidebar