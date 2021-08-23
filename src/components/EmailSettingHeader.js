import React from 'react';

//css
import "./components_css/EmailSettingHeader.css"

//materials
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';

function EmailSettingHeader() {
    return (
        <div className="email-setting-header" >
            <div className="email-setting-left">
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>

            <div className="email-setting-right">
                <IconButton>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default EmailSettingHeader
