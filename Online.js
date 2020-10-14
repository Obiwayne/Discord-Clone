import React from 'react';
import './Online.css';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Online() {
    const user = useSelector(selectUser);
    return (
        <div className="online">
            <div className="online__top">
                
                <SystemUpdateAltRoundedIcon />
                <SendRoundedIcon />                
                <HelpRoundedIcon />

            </div>
            <div className="online__main">
                <h4>online-1</h4>   
                <div className="sidebar__profileContainer">                    
                    <Avatar onClick={() => auth.signOut()} src={user.photo}/>
                </div>
                <p>{user.displayName}</p>
            </div>
        </div>
    )
}

export default Online
