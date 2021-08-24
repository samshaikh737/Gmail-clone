import React from 'react';

//css
import "./components_css/EmailListComponent.css";

//router
import { useHistory } from "react-router-dom";

//materials 
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailListComponent({id, title, subject, desc, time}) {
    const history = useHistory();

    return (
        <div className="email-list-component" onClick={()=> history.push("/mail") } >
            <div className="email-list-option">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>

            <div className="email-list-title">
                <h4>{title}</h4>
            </div>

            <div className="email-list-message">
                <h4>{subject}</h4>
                <span className="email-list-desc">
                    {desc}
                </span>
            </div>

            <p className="email-list-desc email-time">{time}</p>

        </div>
    )
}

export default EmailListComponent;
