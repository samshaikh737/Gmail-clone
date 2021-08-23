import React from 'react'
//css
import "./components_css/Header.css"

//material 
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { IconButton ,Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="Header" >
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <div>
                    <img src="gmail-logo.png" alt="gmail logo" />
                </div>
            </div>
            <div className="header_center"> 
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <KeyboardArrowDownIcon className="downArrowIcon" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoGnAQ5H2N_CHToizFe2-P6Ep7h1jhZQOO8p_oLcmw=s88-c-k-c0x00ffffff-no-rj-mo" />
            </div>
        </div>
    )
}

export default Header
