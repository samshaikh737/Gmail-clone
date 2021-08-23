import React from 'react';

//css
import "./components_css/SidebarFooter.css"

//materials
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function SidebarFooter() {
    return (
        <div className="sidebar-footer" >
            <div className="sidebar-footer-icons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
                
            </div>
        </div>
    )
}

export default SidebarFooter
