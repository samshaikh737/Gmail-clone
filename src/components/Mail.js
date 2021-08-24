import React from 'react';

//css
import "./components_css/Mail.css"

//routers
import { useHistory } from "react-router-dom";

//materials
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Mail() {

    const history = useHistory();

    return (
        <div className="mail" >
            <div className="mail-tools">
                <div className="mail-tools-left">
                    <IconButton onClick={() => {
                        history.goBack()
                    }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div className="mail-tools-right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>

                </div>
            </div>
            <div className="mail-body">
                <div className="mail-body-contain">
                    <div className="mail-body-header">
                        <div className="left">
                            <h4>You've added "Allow access from anywhere (0.0.0.0/0)"</h4>
                            <LabelImportantIcon />
                            <p>{"<mongodb-atlas@mongodb.com>"}</p>
                        </div>
                        <div className="right">
                            <p> Aug 8, 2021, 6:43 PM </p>
                        </div>
                    </div>
                    <div className="mail-body-contain-message">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti distinctio, iste excepturi veritatis et magni minima magnam impedit at quam quos quo nemo numquam facilis eligendi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mail
