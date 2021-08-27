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

//own redux
import { useStateValue } from '../MyRedux/Provider';

import { db } from "../firebaseConfig";

function Mail() {
    const history = useHistory();
    const [ { mailPage } ,updateMail] = useStateValue();

    const goBackFun = ()=>{
        history.goBack()
    }

    const deleteMail = (id)=>{
        if(!id){ 
            alert("email not found");
        }else db.collection('emails').doc(id).delete();
        goBackFun()
    }

    return (
        <div className="mail" >
            <div className="mail-tools">
                <div className="mail-tools-left">
                    <IconButton title="Go Back" onClick={goBackFun}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton title='delete email' onClick={()=>deleteMail(mailPage?.id)} >
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
                            <h4>{mailPage?.subject}</h4>
                            <LabelImportantIcon />
                            <p>{`<${mailPage?.title}>`}</p>
                        </div>
                        <div className="right">
                            <p>{mailPage?.time}</p>
                        </div>
                    </div>
                    <div className="mail-body-contain-message">
                        <p>{mailPage?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mail
