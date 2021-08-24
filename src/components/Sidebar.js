import React from 'react'
import "./components_css/Sidebar.css"

//components
import SidebarOption from './SidebarOption';
import SidebarFooter from './SidebarFooter';

//routers
import { useHistory } from "react-router-dom";

//materials
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../MyRedux/Provider';

function Sidebar() {
    const history = useHistory();
    const [data,updateData] =  useStateValue();

    const handleComposeBtn = ()=>{
        updateData({"type":"update_showSendMail",'value': true});
    }

    return (
        <div className="Sidebar" >
            <Button onClick={handleComposeBtn} startIcon={<AddIcon fontSize="large"/>} className="sidebar_compose" >COMPOSE</Button>

            <div className="sidebar-option-container">
                <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} click={()=> history.push("/")} />
                <SidebarOption Icon={StarIcon} title="Starred" />
                <SidebarOption Icon={LabelImportantIcon} title="Important" />

                <SidebarOption Icon={NearMeIcon} title="Sent" number={30} />
                <SidebarOption Icon={NoteIcon} title="Drafts"  />
                <SidebarOption Icon={ExpandMoreIcon} title="More" />

            </div>

            <SidebarFooter />

        </div>
    )
}

export default Sidebar;
