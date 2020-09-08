import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar,IconButton} from '@material-ui/core';
import SidebarChat from './SidebarChat'
import db from '../Firebase';
import {useStateValue} from '../StateProvider';

const Sidebar = () => {
    const [{user},dispatch] = useStateValue();
    console.log(user.photoURL);
    const [rooms, setRooms] = useState([])
    useEffect(() => {
      const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map((doc) =>{
                return{
                    id:doc.id ,
                    data:doc.data()
                    }
            }))
       })
       return () => {
            unsubscribe();
        }
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                    <h3>{user?.displayName}</h3>
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
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />                
                    <input type="text" placeholder="Search or send new message"></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat="dd" />
                {
                    rooms.map(room =>
                        (<SidebarChat 
                        key={room.id}
                        id={room.id}
                        name={room.data.name}
                        />)
                    )
                }
            </div>
        </div>
    )
}
export default Sidebar
