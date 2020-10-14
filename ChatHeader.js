import React from 'react';
import './ChatHeader.css';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>  
            </div>
            <div className="chatHeader__right">
                <NotificationsRoundedIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
