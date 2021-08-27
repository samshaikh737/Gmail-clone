import React from 'react'
//css
import "./components_css/Header.css"

//material 
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { IconButton, Avatar } from '@material-ui/core';

import { useStateValue } from '../MyRedux/Provider';

import { auth } from "../firebaseConfig";

function Header() {
    const [{ user }, updateUser] = useStateValue();

    const logout = () => {
        auth.signOut().then(() => {
            updateUser({
                type: "logout"
            })
        })
    }

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
                {
                    user?.photo ? <IconButton title="Logout" onClick={logout} >
                        <Avatar src={user.photo} />
                    </IconButton> : <Avatar />
                }
            </div>
        </div>
    )
}

export default Header
