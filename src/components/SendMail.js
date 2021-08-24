import React from 'react';

//materials
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import { useStateValue } from '../MyRedux/Provider';

function SendMail() {
    const [data,updateData] =  useStateValue();

    const handleCloseBtn = ()=>{
        updateData({"type":"update_showSendMail",'value': false});
    }

    return (
        <div className="sendMail" >
            <div className="send-mail-header">
                <h4>Send a Mail</h4>
                <IconButton onClick={handleCloseBtn} >
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="send-mail-body">
                <form>
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="10" rows="20">    </textarea>

                    <div className="send-mail-form-btn-container">
                        <button id="sendMailBtn">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SendMail
